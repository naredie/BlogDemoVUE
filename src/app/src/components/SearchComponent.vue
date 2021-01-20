<template src='./views/SearchView.html'>
  
</template>

<script>
import axios from "axios";
import Global from "../Global/global.ts";
import ArticulosComponent from "./ArticulosComponent.vue";
export default {
  name: "Search",
  mounted() {
    var searchString = this.$route.params.searchString;
    this.getArticlesbySearch(searchString);
  },
  components: {
    ArticulosComponent,
  },
  data() {
    return { articles: [], url: Global.url };
  },
  methods: {
    getArticlesbySearch(searchString) {
      axios.get(this.url + "search/" + searchString).then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>

<style></style>
