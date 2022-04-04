import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEng from 'src/i18n/locales/translation-en.json';
import translationFre from 'src/i18n/locales/translation-fre.json';
import translationGer from 'src/i18n/locales/translation-ger.json';
import translationHin from 'src/i18n/locales/translation-hin.json';
import translationJap from 'src/i18n/locales/translation-jap.json';


i18n
    .use( Backend )
    // .use( LanguageDetector )
    .use( initReactI18next )
    .init( {
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        resources: {
            en: {
                translation: translationEng
            },
            ja: {
                translation: translationJap
            },
            hin: {
                translation: translationHin
            },
            ger: {
                translation: translationGer
            },
            fre: {
                translation: translationFre
            },
        }
    } );

export default i18n;