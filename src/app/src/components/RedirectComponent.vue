<template>
    <div>
<h1>Buscando...</h1>
    </div>
</template>

<script>
    export default {
        name:"redirect",
        mounted(){
            var searchText = this.$route.params.searchString;
            this.$router.push("/search/"+ searchText)
        }
    }
</script>
