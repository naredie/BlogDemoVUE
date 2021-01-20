<template src="./views/ArticuloView.html"> </template>

<script>
//import Slider from './SliderComponent.vue';
//import Sidebar from './SidebarComponent.vue';
import Global from "../Global/global.ts";
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "articulo",
  components: {
    //Slider,
    //Sidebar
  },
  data() {
    return {
      article: null,
      url: Global.url,
    };
  },
  methods: {
    getArticle(articleID) {
      axios.get(this.url + "article/" + articleID).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.articleresult;
        }
      });
    },
    deleteArticle(articleID) {
      swal({
        title: "¿Seguro que quieres eliminar este articulo?",
        text: "Una vez eliminado no podras volver a recuperarlo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(this.url + "article/" + articleID).then((res) => {
            if (res.data.status === "success") {
              swal(
                "Articulo borrado",
                "El articulo ha sido borrado correctamente",
                "success"
              );
                //redireccion al blog
                this.$router.push("/blog");
            } else {
              swal(
                "El Articulo no se ha borrado",
                "El articulo no se ha borrado correctamente",
                "success"
              );
            }
          });
        } else {
          swal(
            "Tranquilo!",
            "El articulo se ha guardado sano y salvo",
            "success"
          );
            
        }
      });
    },
  },
  mounted() {
    var articuloID = this.$route.params.id;
    this.getArticle(articuloID);
  },
};
</script>

<style lang="scss" scoped></style>
