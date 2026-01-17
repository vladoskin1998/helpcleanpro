import React, { useEffect, useState } from 'react';
import i18n from '../../i18n';

const languages = [
  { code: 'Ru', label: 'Русский' },
  { code: 'En', label: 'English' },
  { code: 'Bg', label: 'Български' },
];

function useLanguage() {
  const [lang, setLang] = useState(i18n.language);
  
  useEffect(() => {
    const handler = () => setLang(i18n.language);
    i18n.on('languageChanged', handler);
    return () => { i18n.off('languageChanged', handler); };
  }, []);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return { lang, changeLanguage };
}

export const LanguageSelect = () => {
  const { lang, changeLanguage } = useLanguage();
  return (
    <select  className='select-language' value={lang} onChange={e => changeLanguage(e.target.value)} style={{ fontSize: 16 }}>
   
      {languages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.code}
        </option>
      ))}
    </select>
  );
};
