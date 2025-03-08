<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
  <Frog></Frog>
</template>

<script setup>
import Header from "./components/Header.vue";
import { RouterView, useRouter } from "vue-router";
import AOS from "aos";
import Footer from "./components/Footer.vue";
import Frog from "./components/Frog.vue";

AOS.init({
  easing: "ease-out-cubic",
  duration: 600,
  once: true,
});

const router = useRouter();

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  AOS.refresh();
  next();
});
</script>
