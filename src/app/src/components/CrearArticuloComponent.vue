<template src="./views/CrearArticuloView.html"></template>

<script>
import Global from "../Global/global.ts";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import Articlemodel from "../Models/ArticuloModel.js";
import swal from "sweetalert";
export default {
  name: "CrearArticulo",
  data() {
    return {
      url: Global.url,
      article: new Articlemodel("", "", null, "", "", "", ""),
      submitted: false,
      file: "",
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
  mounted() {},
  methods: {
    save() {
      this.submitted = true;
      if (!this.$v.$anyError) {
        axios
          .post(this.url + "save", this.article)
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
                        "Articulo creado",
                        "El articulo se ha creado correctamente",
                        "success"
                      );

                      //actualizo this.article y redireccion al blog
                      this.article = response.data.articleUpdated;
                      this.$router.push("/blog");
                    } else {
                      //alerta de error
                             swal(
                        "El Articulo no ha podido ser creado",
                        "El articulo no se ha creado correctamente",
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
                  "Articulo creado",
                  "El articulo se ha creado correctamente",
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
