<script setup>
  import {reactive} from 'vue'
  import Header from './components/Header.vue'
  import Hero from './components/Hero.vue'
  import About from './components/About.vue'
  import Services from './components/Services.vue'
  import Comments from './components/Comments.vue'
  import Faq from './components/Faq.vue'
  import Footer from './components/Footer.vue'
  
</script>

<template>
  <Header/>
  <Hero/>
  <About/>
  <Services/>
  <Comments/>
  <Faq/>
  <Footer/>
</template>

<style scoped>
  *{
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }

</style>
