<template>
  <Header></Header>
  <RouterView />
</template>

<script setup>
import Header from "./components/Header.vue";
import { RouterView, useRouter } from "vue-router";
import AOS from "aos";

AOS.init({
  easing: "ease-out-cubic",
  duration: 600,
});

const router = useRouter();

router.beforeEach((to, from, next) => {
  next();
  AOS.refresh();
});
</script>
