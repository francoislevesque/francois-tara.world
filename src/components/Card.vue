<template>
  <div class="max-w-5xl mx-auto h-full my-16">
    <div class="flex bg-white flex-col || md:flex-row">
      <div
        class="min-w-0 bg-peppermint overflow-hidden h-96 order-2 || md:w-1/2 md:h-auto"
        :class="{
          'md:order-1': position === 'right',
          'md:order-2': position === 'left',
        }"
      >
        <div
          class="relative flex h-full w-full"
          data-aos="zoom-out"
          data-aos-duration="600"
        >
          <img
            :src="src"
            :alt="alt"
            class="object-cover absolute inset-0 h-full w-full"
          />
        </div>
      </div>

      <div
        class="w-full md:w-1/2 min-w-0 py-16 order-1 || md:py-20 md:px-6"
        :class="{
          'md:order-2': position === 'right',
          'md:order-1': position === 'left',
        }"
      >
        <div
          class="text-peppermint block font-light leading-loose duration-300 px-6 max-w-sm mx-auto"
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
  position: String,
});
</script>
