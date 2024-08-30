<template>

  <div class="w-full relative overflow-hidden">

  
    <img src="./assets/Tara-Francois-152-2.jpg" alt="Francois and Tara" class="w-full h-full absolute inset-0 object-cover">

    <div class="relative pb-20 pt-80">
      <div class="text-center">
        <h1 class="font-display text-5xl mb-6 text-white">
          Tara & François
        </h1>

        <date class="mb-12 block font-serif font-light tracking-widest text-lg text-white">
          06.09.2025
        </date>

        <Rsvp></Rsvp>
      </div>
    </div>

  </div>

  <div class="bg-[#e5e9e5]">
    
    <div class="pt-10 || sm:pb-20 sm:pt-20">
      <div class="max-w-4xl mx-auto">
        <div class="flex gap-10 items-center flex-col || sm:flex-row">

          <div class="flex-1 order-2 || sm:order-1">
            <img src="./assets/Tara-Francois-145.jpg" alt="Francois and Tara" class="aspect-square object-cover || sm:aspect-[3/4]">
          </div>

          <div class="flex-1 text-center py-8 order-1 || sm:py-0 sm:order-2">
            <div class="text-[#324232] inline-block font-light leading-loose duration-300 font-serif max-w-xs">

              <h2 class="font-display font-light text-5xl mb-6">
                {{ $t('ceremony') }}
              </h2>

              <p class="font-display font-light text-3xl mb-6">
                15h00
              </p>

              <p>
                Manoir Stonehaven
              </p>
              <p>
                40 Chem. du Lac des Sables
              </p>
              <p>
                Sainte-Agathe-des-Monts
              </p>
              <a class="underline" 
              href="https://www.google.com/maps/place/Stonehaven+Le+Manoir/@46.0336151,-74.2990264,15z/data=!4m2!3m1!1s0x0:0x6a3ee8538719e043?sa=X&ved=1t:2428&ictx=111"
              target="_blank" 
              >
                {{ $t('map') }}
              </a>

              <p class="leading-snug text-sm mt-12">
              {{ $t('ceremony_description') }}
            </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>


    <div class="sm:px-10">

    <div class="max-w-7xl mx-auto text-white">
      <div class="relative py-20 px-6">
        <img src="./assets/Tara-Francois-101-3.jpg" alt="Francois and Tara" class="w-full h-full absolute inset-0 object-cover">
      <div class="bg-black h-full w-full opacity-40 absolute inset-0"></div>
      <div class="relative text-center">
        <p class="mb-10 font-display">
          {{ $t('join_us') }}
        </p>
        <h2 class="font-display text-5xl mb-16">
          {{ $t('we_hope_you_make_it') }}
        </h2>
        <Rsvp></Rsvp>
      </div>
    </div>
  </div>
    </div>


    <footer>
      <div class="flex max-w-7xl mx-auto py-16 font-display text-sm px-6">
        <div class="flex-1">
          <a href="mailto:tara.dignazio@gmail.com" class="underline">
            {{ $t('email_us') }}
          </a>
        </div>
        <div class="flex-1 text-right">
          Made with ❤️ by François Lévesque
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

import Rsvp from './components/Rsvp.vue'

</script>
