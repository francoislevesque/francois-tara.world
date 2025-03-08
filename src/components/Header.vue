<template>
  <header class="fixed w-full z-10">
    <!-- Desktop -->
    <nav
      class="mx-auto flex max-w-full items-center justify-between p-6 transition-colors duration-300 xl:px-8"
      :class="{
        'bg-mint text-peppermint': isTransparent,
        'bg-transparent text-white': !isTransparent,
      }"
      data-aos="fade"
      aria-label="Global"
    >
      <div class="flex xl:flex-1">
        <RouterLink
          to="/"
          class="-m-1.5 p-1.5 font-display text-3xl font-medium"
        >
          T&F 06.09.2025
        </RouterLink>
      </div>

      <div class="flex xl:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-10" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden xl:flex xl:gap-x-12">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="text-lg tracking-wide font-display font-medium hover:opacity-90"
        >
          {{ item.name }}
        </RouterLink>
      </div>
      <div class="hidden xl:flex xl:flex-1 xl:justify-end">
        <Rsvp></Rsvp>
      </div>
    </nav>

    <!-- Mobile -->
    <TransitionRoot :show="mobileMenuOpen" as="template">
      <Dialog
        as="div"
        class="xl:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />

        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogPanel
            class="fixed flex flex-col text-peppermint inset-y-0 right-0 z-10 w-full h-screen overflow-y-auto bg-mint p-6 sm:ring-1 sm:ring-white/10"
          >
            <div class="flex items-center justify-between shrink-0">
              <RouterLink to="/" class="text-3xl font-display font-medium">
                T&F 06.09.2025
              </RouterLink>

              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="size-10" aria-hidden="true" />
              </button>
            </div>

            <div class="grow flex flex-col justify-center items-center">
              <div class="space-y-2 py-6">
                <RouterLink
                  v-for="(item, index) in navigation"
                  :key="item.name"
                  :to="item.to"
                  data-aos="fade-up"
                  :data-aos-delay="50 * index"
                  class="text-center block px-3 tracking-wide py-2 font-medium text-peppermint font-display text-3xl hover:text-peppermint/70"
                >
                  {{ item.name }}
                </RouterLink>
              </div>

              <div
                class="flex justify-center py-6 pb-20"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Rsvp></Rsvp>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </header>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Rsvp from "./Rsvp.vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const router = useRouter();

router.beforeEach((to, from, next) => {
  mobileMenuOpen.value = false;
  next();
});

const navigation = [
  { name: i18n.t("header.home"), to: "/" },
  { name: i18n.t("header.about_us"), to: "/about" },
  { name: i18n.t("header.the_event"), to: "/event" },
  { name: i18n.t("header.location"), to: "/location" },
];

const mobileMenuOpen = ref(false);

const scrollPosition = ref(0);

function handleScroll() {
  scrollPosition.value = window.scrollY;
}

window.addEventListener("scroll", handleScroll);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isTransparent = computed(() => scrollPosition.value > 20);
</script>
