import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export type LangT = 'ru' | 'en' | 'bg';
const resources = {
    ru: {},
    en: {},
    bg:{}
}
const getLangFromQuery = () => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang')?.toLowerCase();
  if (lang === 'ru') return 'ru';
  if (lang === 'bg' ) return 'bg';
  if (lang === 'en') return 'en';
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLangFromQuery(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
