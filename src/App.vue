<template>
  <Header></Header>
  <RouterView />
</template>

<script setup>

import Header from './components/Header.vue';
import Rsvp from './components/Rsvp.vue'
import { RouterView } from 'vue-router'

</script>
