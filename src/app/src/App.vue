<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent> 
    <div class="center">
      <!-- <UltimosArticulosComponent></UltimosArticulosComponent> -->
      <router-view></router-view>
      <SidebarComponent></SidebarComponent>
       <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import SliderComponent from './components/SliderComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'

import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent
  }
}
</script>

<style>
@import './assets/css/styles.css';
</style>
