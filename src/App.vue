<script setup>
  import {reactive} from 'vue'
  import Header from './components/Header.vue'
  import Hero from './components/Home/Hero.vue'
  import About from './components/Home/About.vue'
  import Services from './components/Home/Services.vue'
  import Comments from './components/Home/Comments.vue'
  import Faq from './components/Home/Faq.vue'
  import Contact from './components/Contact/Contact.vue'
  import Clients from './components/Clients/Clients.vue'
  import Service from './components/Services/Service.vue'
  import Footer from './components/Footer.vue'
  
</script>

<template>
  <Header/>
  <Hero/>
  <About/>
  <Services/>
  <Comments/>
  <Faq/>
  <!--<Contact/>
  <Clients/>
  <Service/>-->
  <Footer/>
</template>

<style scoped>
  *{
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }

</style>
