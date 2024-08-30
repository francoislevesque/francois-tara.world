import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
    locale: navigator.language.split('-')[0] || 'fr',
    messages: {
        en,
        fr,
    }
})

const app = createApp(App)
app.use(i18n).mount('#app')
