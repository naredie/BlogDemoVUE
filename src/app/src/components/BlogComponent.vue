<template src="./views/BlogView.html">

</template>

<script>
import axios from "axios";
import Global from "../Global/global.ts";
import ArticulosComponent from "./ArticulosComponent.vue";
export default {
  name: "Blog",
  mounted() {
    this.getArticles();
  },
  components: {
    ArticulosComponent,
  },
  data() {
    return { articles: [], url: Global.url };
  },
  methods: {
    getArticles() {
      axios.get(this.url + "articles").then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>

<style></style>
