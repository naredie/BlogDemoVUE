<template src="./views/SidebarView.html">
     
</template>

<script>
export default {
name:"Sidebar",
data(){
    return{
        searchstring: null
    }
},
methods:{
    buscar(){
        this.$router.push('/redirect/'+this.searchstring);
    }
 }
}
</script>

<style>

</style>