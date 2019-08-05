import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


import fr from './i18n/fr.json';
import en from './i18n/en.json';
import jp from './i18n/jp.json';

const resources = {
  fr: {
    translation: fr
  },
  en: {
    translation: en
  },
  jp: {
    translation: jp
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "fr",
    debug: true,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;