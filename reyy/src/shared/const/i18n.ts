import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '@/shared/translation/en.json'
import ru from '@/shared/translation/ru.json'
import ge from '@/shared/translation/ge.json'

const currentLang = sessionStorage.getItem('currentLang') || 'ru'

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    },
    ge: {
        translation: ge
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: currentLang,
        fallbackLng: 'ru',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
