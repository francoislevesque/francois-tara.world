<template>
  <div class="pt-32 pb-64 bg-purple-700 text-white">
    <div class="max-w-7xl mx-auto px-5">
      <h1 class="text-5xl font-comic mb-8">
        {{ $t("music_suggestion.title") }}
      </h1>

      <p class="font-comic mb-12">
        {{ $t("music_suggestion.content") }}
      </p>

      <div class="flex gap-5">
        <div class="flex-1">
          <video src="/videos/2.mp4" autoplay loop muted class="w-full" />
        </div>
        <div class="flex-1">
          <video src="/videos/1.mp4" autoplay loop muted class="w-full" />
        </div>
        <div class="flex-1">
          <video src="/videos/3.mp4" autoplay loop muted class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicSuggestion",
};
</script>
