<template>
  <main class="min-h-screen pt-24 px-6 bg-slate-900 text-white">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-display mb-8">{{ $t('header.the_event') }}</h1>
      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-display mb-4">{{ $t('ceremony') }}</h2>
          <p class="text-lg leading-relaxed">{{ $t('ceremony_description') }}</p>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>
