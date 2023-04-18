<script setup>
    import {reactive} from 'vue'
    import Header from '../components/Principal/Header.vue'
    import Hero from '../components/Services/Hero.vue'
    import Service from '../components/Services/Service.vue'
    import Footer from '../components/Principal/Footer.vue'
</script>

<template>
    <Header/>
    <Hero/>
    <Service/>
    <Footer/>
</template>

<style scoped>
  *{
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    }

</style>