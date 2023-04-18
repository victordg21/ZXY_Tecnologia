<script setup>
    import {reactive} from 'vue'
    import Header from '../components/Principal/Header.vue'
    import Contact from '../components/Contact/Contact.vue'
    import Footer from '../components/Principal/Footer.vue'
</script>

<template>
    <Header/>
    <Contact/>
    <Footer/>
</template>

<style scoped>
  *{
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    }
</style>
