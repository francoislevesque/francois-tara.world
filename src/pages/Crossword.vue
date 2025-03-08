<template>
  <main>
    <div class="relative h-72 pt-10 bg-peppermint text-white">
      <div class="relative flex h-full items-center text-center">
        <div class="max-w-4xl mx-auto w-full px-6">
          <h1 class="text-5xl font-display text-center">
            {{ $t("header.crossword") }}
          </h1>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto py-16 px-6">
      <iframe src="/crossword.pdf" class="w-full h-[1200px]"></iframe>
    </div>
  </main>
</template>

<script setup></script>
