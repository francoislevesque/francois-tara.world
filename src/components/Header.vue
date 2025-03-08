<template>
    <header class="fixed w-full z-10">

      <!-- Desktop -->  
      <nav class="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8" aria-label="Global">
        
        <div class="flex lg:flex-1">
          <RouterLink to="/" class="-m-1.5 p-1.5 text-white font-display text-3xl">
            T&F 06.09.2025
          </RouterLink>
        </div>

        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-10" aria-hidden="true" />
          </button>
        </div>

        <div class="hidden lg:flex lg:gap-x-12">
          <RouterLink v-for="item in navigation" :key="item.name" :to="item.to" class="text-sm/6 font-semibold text-white">{{ item.name }}</RouterLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <Rsvp></Rsvp>
        </div>
      </nav>

      <!-- Mobile -->
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <RouterLink to="/" class="-m-1.5 p-1.5">
              T&F 06.09.2025
            </RouterLink>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <RouterLink v-for="item in navigation" :key="item.name" :to="item.to" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">{{ item.name }}</RouterLink>
              </div>
              <div class="py-6">
                <Rsvp></Rsvp>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import Rsvp from './Rsvp.vue'
  import { useI18n } from 'vue-i18n'

  const i18n = useI18n();

  const navigation = [
    { name: i18n.t('header.home'), to: '/' },
    { name: i18n.t('header.about_us'), to: '/about' },
    { name: i18n.t('header.the_event'), to: '/event' },
    { name: i18n.t('header.location'), to: '/location' },
  ]

  const mobileMenuOpen = ref(false)
</script>