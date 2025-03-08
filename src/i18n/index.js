import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'Hello!'
    }
  },
  fr: {
    message: {
      hello: 'Bonjour!'
    }
  }
}

export const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})
