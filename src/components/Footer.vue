<template>
  <footer>
    <div
      class="flex flex-wrap justify-between max-w-7xl mx-auto py-16 text-lg font-light px-6"
    >
      <div class="">
        <a
          href="mailto:tara.dignazio@gmail.com"
          class="underline whitespace-nowrap mr-4"
        >
          {{ $t("email_us") }}
        </a>
        <RouterLink to="/music-suggestion" class="underline whitespace-nowrap">
          {{ $t("footer.music_suggestion") }}
        </RouterLink>
      </div>
      <div class="text-right whitespace-nowrap">
        {{ $t("footer.copyright") }}
      </div>
    </div>
  </footer>
</template>
