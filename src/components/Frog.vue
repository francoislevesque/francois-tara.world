<template>
  <button
    type="button"
    class="fixed bottom-5 right-5"
    @click="showToads = true"
  >
    <img
      src="/frog.png"
      class="w-10"
      :style="{ transform: `rotate(${rotationValue}deg)` }"
    />
  </button>

  <div
    v-if="showToads"
    class="fixed inset-0 flex items-center justify-center z-10"
  >
    <div
      class="bg-black opacity-50 absolute inset-0"
      @click="showToads = false"
    ></div>

    <div class="flex gap-4 relative bg-white p-20">
      <div class="text-center">
        <img src="/toad-1.jpeg" class="w-40" />
        Marcel
      </div>
      <div class="text-center">
        <img src="/toad-2.jpeg" class="w-40" />
        Pauline
      </div>
      <div class="text-center">
        <img src="/toad-3.jpeg" class="w-40" />
        Claude
      </div>
    </div>
  </div>
</template>

<script setup>
const rotationValue = ref(0);
const showToads = ref(false);

const handleScroll = () => {
  rotationValue.value = window.scrollY / 3;
};

window.addEventListener("scroll", handleScroll);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// ESC
function close() {
  showToads.value = false;
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    close();
  }
});
</script>
