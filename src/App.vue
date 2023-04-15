<script setup>
  import {reactive} from 'vue'
  import Header from './components/Header.vue'
  import About from './components/About.vue'
  import Services from './components/Services.vue'
  import Faq from './components/Faq.vue'
  import Footer from './components/Footer.vue'
  
</script>

<template>
  <Header/>
  <About/>
  <Infos/>
  <Services/>
  <Faq/>
  <Footer/>
</template>

<style scoped>
  *{
    font-family:'Open Sans', sans-serif;
    overflow-x: hidden;
  }

</style>
