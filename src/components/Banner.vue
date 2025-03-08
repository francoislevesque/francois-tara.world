<template>
  <div class="w-full mx-auto text-white relative">
    <img
      :src="src"
      :alt="alt"
      class="w-full h-full absolute inset-0 object-cover"
    />

    <div class="bg-black h-full w-full opacity-40 absolute inset-0"></div>

    <div class="relative py-20 px-6">
      <div class="relative text-center">
        <slot></slot>
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
