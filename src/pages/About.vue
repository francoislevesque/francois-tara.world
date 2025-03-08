<template>
  <main>
    <div class="relative h-96 bg-peppermint text-white">
      <img
        src="/Tara-Francois-152-2.jpg"
        alt="Francois and Tara"
        class="absolute inset-0 object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="relative flex h-full items-center text-left">
        <div class="max-w-4xl mx-auto w-full">
          <h1 class="text-5xl font-display text-left">
            {{ $t("header.about_us") }}.
          </h1>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto py-20 pb-32">
      <div
        class="prose prose-2xl text-peppermint"
        v-html="$t('about_us_content')"
      ></div>
    </div>
  </main>
</template>

<script setup></script>
