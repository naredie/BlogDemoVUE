<template src="./views/ArticulosView.html">
  
</template>

<script>
import Global from "../Global/global.ts";
export default {
  name: "Articulos",
  props: ["articles"],
  data() {
    return { url: Global.url };
  },
};
</script>
