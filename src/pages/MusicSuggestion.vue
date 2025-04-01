<template>
  <div class="pt-32 pb-64 bg-purple-700 text-white font-comic">
    <div class="max-w-5xl mx-auto px-5">
      <div class="flex gap-20 mb-6">
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

      <h1 class="text-5xl mb-8">
        {{ $t("music_suggestion.title") }}
      </h1>

      <p class="mb-6">
        {{ $t("music_suggestion.content") }}
      </p>

      <form @submit.prevent="submit" class="mb-12 relative">
        <div class="flex gap-4 items-end mb-4 max-w-lg">
          <div class="flex-1">
            <label for="title" class="block mb-2">{{ $t("title") }}</label>
            <input
              type="text"
              id="title"
              required
              v-model="form.title"
              class="w-full p-2 border border-white bg-transparent focus:outline-none font-comic"
            />
          </div>
          <div class="flex-1">
            <label for="artist" class="block mb-2">{{ $t("artist") }}</label>
            <input
              type="text"
              id="artist"
              v-model="form.artist"
              class="w-full p-2 border border-white bg-transparent focus:outline-none font-comic"
              required
            />
          </div>

          <div class="flex-1">
            <button
              type="submit"
              :disabled="loading"
              class="bg-white text-purple-700 font-comic py-2 border border-white px-8"
            >
              {{ $t("submit") }}
            </button>
          </div>
        </div>

        <transition name="fade">
          <div
            v-if="loading"
            class="text-white bg-purple-600 absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >
            <img
              :src="'/frog.png'"
              class="animate-spin-fast w-12"
              alt="Loading"
            />
          </div>
        </transition>
      </form>

      <ul class="font-comic divide-y divide-white/50">
        <li
          v-for="music in musicSuggestionsSorted"
          :key="music.id"
          class="py-1 flex gap-4"
        >
          <div class="grow">{{ music.title }} - {{ music.artist }}</div>
          <div class="shrink">
            {{ new Date(music.created_at).toLocaleDateString() }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://yxndtajifbxeappmkqtn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4bmR0YWppZmJ4ZWFwcG1rcXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NjU2NjAsImV4cCI6MjA1OTA0MTY2MH0.6j3dVNm_h6T4X_73ErpGqQjhwllnCJH5HTSUorVHuIw"
);

export default {
  name: "MusicSuggestion",
  data() {
    return {
      loading: false,
      music_suggestions: [],
      form: {
        title: "",
        artist: "",
      },
    };
  },
  async mounted() {
    this.getAll();
  },
  computed: {
    musicSuggestionsSorted() {
      return [...this.music_suggestions].sort((a, b) => {
        return b.created_at.localeCompare(a.created_at);
      });
    },
  },
  methods: {
    async getAll() {
      const { data: music_suggestions, error } = await supabase
        .from("music_suggestions")
        .select("*");

      if (error) {
        console.error(error);
        return [];
      }

      this.music_suggestions = music_suggestions;
    },
    async submit() {
      if (this.loading) return;

      this.loading = true;

      const { data, error } = await supabase
        .from("music_suggestions")
        .insert(this.form);

      this.form.title = "";
      this.form.artist = "";

      this.loading = false;

      this.getAll();

      if (error) {
        console.error(error);
      }
    },
  },
};
</script>
