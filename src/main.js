import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

import en from './locales/en.json'
import fr from './locales/fr.json'

let locale = navigator.language.split('-')[0] || 'fr';
locale = 'fr';

const i18n = createI18n({
    locale,
    messages: {
        en,
        fr,
    }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
