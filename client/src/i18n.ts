
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import ru from './locales/ru.json'
import en from './locales/en.json'
import bg from './locales/bg.json'

export type LangT = 'ru' | 'en' | 'bg';

 
const resources = {
  ru: { translation: ru },
  en: { translation: en },
  bg: { translation: bg }
};
console.log(resources);



i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "bg", 


    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;