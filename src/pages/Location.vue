<template>
  <main>
    <div class="relative h-96 bg-peppermint text-white">
      <img
        src="/b345eff7.jpg"
        alt="Stonehaven View"
        class="absolute inset-0 object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="relative flex h-full items-center">
        <div class="max-w-4xl mx-auto w-full px-6">
          <h1
            class="text-5xl font-display text-center"
            style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2)"
          >
            Manoir Stonehaven
          </h1>
        </div>
      </div>
    </div>

    <Card position="left" src="/stonehaven-2.jpg" alt="Stonehaven View">
      <p>
        {{ $t("location_1") }}
      </p>

      <hr class="my-10" />

      <p class="leading-snug" v-html="$t('book_a_room_description')">
    </p>
    </Card>

    <Card position="right" src="/relais-chateaux.jpg" alt="Relais Châteaux">
      <p>
        {{ $t("location_2") }}
      </p>
    </Card>

    <Callout
      :text="$t('about_stonehaven')"
      href="https://www.stonehavenlemanoir.com"
      :buttonText="$t('learn_more')"
    />

    <Card position="left" src="/Petit_train_du_nord.jpg" alt="Laurentides">
      <p>
        {{ $t("location_3") }}
      </p>
    </Card>

    <Card position="right" src="/laurentides.jpg" alt="Laurentides Hiking">
      <p v-html="$t('location_4')"></p>
    </Card>

    <Callout
      :text="$t('about_laurentides')"
      href="https://www.laurentides.com/"
      :buttonText="$t('learn_more')"
    />
  </main>
</template>

<script setup>
import Callout from "@/components/Callout.vue";
import Card from "@/components/Card.vue";
</script>
