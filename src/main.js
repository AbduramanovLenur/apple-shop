import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store/store';
import '@/assets/fonts/fonts.css';
import '@/assets/styles/globals.scss';
import '@/assets/styles/variables.scss';
import { createI18n, useI18n } from 'vue-i18n';
import { languages } from './i18n';
import { defaultLocale } from './i18n';
import Icon from '@/components/Icon.vue';
import VueTheMask from 'vue-the-mask';

const app = createApp(App, {
    setup() {
        const {t} = useI18n();
        return {t}
    }
})

app.component('Icon', Icon);

const messages = Object.assign(languages);
const localeStorageLang = localStorage.getItem('lang');
const i18n = createI18n({
    legacy: false,
    locale: localeStorageLang || defaultLocale,
    fallbackLocale: 'ru',
    messages
});

app.use(store).use(router).use(i18n).use(VueTheMask).mount('#app');