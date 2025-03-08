<template>
  <div class="max-w-5xl mx-auto py-16">
    <div class="flex bg-white gap-10 items-center flex-col || sm:flex-row">
      <div
        class="flex-1 order-2 relative overflow-hidden bg-peppermint || sm:order-1"
      >
        <img
          :src="src"
          :alt="alt"
          class="aspect-square object-cover || sm:aspect-[3/4]"
          data-aos="zoom-out"
          data-aos-duration="600"
        />
      </div>

      <div class="flex-1 text-center py-8 order-1 || sm:py-0 sm:order-2">
        <div
          class="text-peppermint inline-block font-light leading-loose duration-300 max-w-xs"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
});
</script>
