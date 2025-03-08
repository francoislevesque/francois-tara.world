<template>
  <main>
    <div class="relative h-96 bg-peppermint text-white">
      <img
        src="/Tara-Francois-101-3.jpg"
        alt="Francois and Tara"
        class="absolute inset-0 object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="relative flex h-full items-center text-left">
        <div class="max-w-4xl mx-auto w-full px-6">
          <h1 class="text-5xl font-display text-left">
            {{ $t("header.the_event") }}.
          </h1>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-6 py-16">
      <div class="space-y-6">
        <section class="text-4xl">
          {{ $t("in_construction") }}
        </section>
      </div>
    </div>
  </main>
</template>

<script setup></script>
