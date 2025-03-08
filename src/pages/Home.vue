<template>
  <div class="w-full relative overflow-hidden">
    <img
      src="/Tara-Francois-106-1.jpeg"
      alt="Francois and Tara"
      class="w-full h-full absolute inset-0 object-cover object-top"
    />

    <div
      class="from-peppermint/60 to-transparent bg-gradient-to-b h-full w-full absolute inset-0"
    ></div>

    <div class="relative h-[90vh] flex flex-col justify-end pb-32">
      <div class="text-center">
        <h1
          data-aos="fade-up"
          class="font-display text-6xl mb-6 text-white h-16"
          style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1)"
        >
          Tara & François
        </h1>

        <div
          class="mb-12 block font-light tracking-widest text-lg text-white h-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          06.09.2025
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <Rsvp></Rsvp>
          <p
            class="mt-2 text-white"
            style="text-shadow: 0 0 3px rgba(0, 0, 0, 0.4)"
          >
            {{ $t("please_confirm_by_x") }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <Card
    position="left"
    src="/Tara-Francois-147.jpg"
    alt="Francois and Tara"
    class="text-center"
  >
    <h2 class="font-display font-light text-5xl mb-6">
      {{ $t("ceremony") }}
    </h2>

    <p class="font-display font-light text-3xl mb-10">15h00</p>

    <div class="space-y-2 leading-tight">
      <p>Manoir Stonehaven</p>
      <p>40 Chem. du Lac des Sables</p>
      <p>Sainte-Agathe-des-Monts</p>
    </div>

    <a
      class="underline"
      href="https://www.google.com/maps/place/Stonehaven+Le+Manoir/@46.0336151,-74.2990264,15z/data=!4m2!3m1!1s0x0:0x6a3ee8538719e043?sa=X&ved=1t:2428&ictx=111"
      target="_blank"
    >
      {{ $t("map") }}
    </a>

    <p class="leading-snug mt-12">
      {{ $t("ceremony_description") }}
    </p>
  </Card>

  <Callout
    :to="'/about'"
    :text="$t('how_it_all_started')"
    :buttonText="$t('header.about_us')"
  />

  <Banner src="/Tara-Francois-37.jpg" alt="Francois and Tara">
    <p class="mb-10 text-lg font-display">
      {{ $t("join_us") }}
    </p>

    <h2 class="font-display text-5xl mb-16">
      {{ $t("we_hope_you_make_it") }}
    </h2>

    <Rsvp></Rsvp>

    <p class="mt-2 text-white">
      {{ $t("please_confirm_by_x") }}
    </p>
  </Banner>
</template>

<script setup>
import Card from "@/components/Card.vue";
import Rsvp from "@/components/Rsvp.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
import Callout from "@/components/Callout.vue";
</script>
