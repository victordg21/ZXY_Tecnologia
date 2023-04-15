<script setup>
  import {reactive} from 'vue'
  import Header from './components/Header.vue'
  import Infos from './components/Infos.vue'
  import Services from './components/Services.vue'
</script>

<template>
  <Header/>
  <Infos/>
  <Services/>
</template>

<style scoped>
  *{
    font-family:'Open Sans', sans-serif;
  }

</style>
