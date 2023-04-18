<script setup>
    import {reactive} from 'vue'
    import Header from '../components/Principal/Header.vue'
    import Hero from '../components/Home/Hero.vue'
    import About from '../components/Home/About.vue'
    import Services from '../components/Home/Services.vue'
    import Comments from '../components/Home/Comments.vue'
    import Faq from '../components/Home/Faq.vue'
    import Footer from '../components/Principal/Footer.vue'
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