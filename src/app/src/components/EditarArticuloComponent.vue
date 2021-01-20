<template src="./views/EditarArticulo.html"> </template>

<script>
import Global from "../Global/global.ts";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import Articlemodel from "../Models/ArticuloModel.js";
import swal from "sweetalert";
export default {
  name: "EditarArticulo",
  data() {
    return {
      url: Global.url,
      article: new Articlemodel("", "", null, "", "", "", ""),
      submitted: false,
      file: "",
      isedit: true,
    };
  },
  validations: {
    title: {
      required,
    },
    content: {
      required,
    },
  },
  mounted() {
    var articleid = this.$route.params.id;
    this.getArticle(articleid);  
  },
  methods: {
    getArticle(articleID) {
      axios.get(this.url + "article/" + articleID).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.articleresult;
        }
      });
    },
    save() {
      this.submitted = true;
      if (!this.$v.$anyError) {
        axios
          .put(this.url + "article/"+this.article._id, this.article)
          .then((res) => {
            if (res.data.status === "success") {
              //hago un append de los datos de la imagen
              if (
                this.file !== null &&
                this.file !== "undefined" &&
                this.file !== ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                axios
                  .post(
                    this.url + "upload-image/" + res.data.article._id,
                    formData
                  )
                  .then((response) => {
                    if (response.data.articleUpdated) {
                      swal(
                        "Articulo Editado",
                        "El articulo "+res.data.article.title+" se ha editado correctamente",
                        "success"
                      );

                      //actualizo this.article y redireccion al blog
                      this.article = response.data.articleUpdated;
                      this.$router.push("/blog");
                      // this.$router.push("/articulo/"+this.article._id);
                    } else {
                      //alerta de error
                      swal(
                        "El Articulo no ha podido ser editado",
                        "El articulo "+res.data.articleUpdated.title+" no se ha editado correctamente",
                        "error"
                      );
                    }
                  })
                  .catch((err) => {
                    {
                      console.log(err);
                    }
                  });
              } else {
                swal(
                  "Articulo editado",
                  "El articulo "+this.article.title+" se ha ediado correctamente",
                  "success"
                );

                //si no se adjunta un archivo, al no ser requerido
                //actualizamos this.article y hacemos la redireccion
                this.article = res.data.articleUpdated;
                console.log(this.article);
                this.$router.push("/blog");
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        return false;
      }
    },
    imageChange() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>
