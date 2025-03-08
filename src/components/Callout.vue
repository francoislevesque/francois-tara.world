<template>
  <div class="my-16 max-w-5xl mx-auto">
    <div class="py-20 border-t border-b text-center border-peppermint/30">
      <h2 class="text-4xl font-display mb-6">{{ text }}</h2>

      <RouterLink
        v-if="to"
        :to="to"
        class="inline-block px-10 py-4 bg-black text-white text-lg hover:bg-black/80 duration-200"
        data-aos="fade"
      >
        {{ buttonText }}
      </RouterLink>
      <a
        v-else
        :href="href"
        class="inline-block px-10 py-4 bg-black text-white text-lg hover:bg-black/80 duration-200"
        data-aos="fade"
      >
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  to: String,
  href: String,
  text: String,
  buttonText: String,
});
</script>
