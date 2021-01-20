<template src='./views/UltimosArticulosView.html'>
 
</template>

<script>
import ArticulosComponent from "./ArticulosComponent.vue";
import Global from "../Global/global.ts";
import axios from "axios";
export default {
  name: "UltimosArticulos",
  components: {
    ArticulosComponent,
  },
  data() {
    return { url: Global.url, articles: [] };
  },
  methods: {
    getLastArticles() {
      axios.get(this.url + "/articles/last").then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          this.articles = res.data.articles;
            console.log(this.articles);
        }
      });
    },
  },
  mounted() {
    this.getLastArticles();
  },
};
</script>

<style></style>
