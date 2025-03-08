<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<script setup>
import Header from "./components/Header.vue";
import { RouterView, useRouter } from "vue-router";
import AOS from "aos";
import Footer from "./components/Footer.vue";

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
