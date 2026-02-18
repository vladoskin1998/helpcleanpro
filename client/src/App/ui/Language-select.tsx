import React, { useEffect, useState, useRef } from 'react';
import i18n from '../../i18n';

const languages = [
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
  { code: 'bg', label: 'Български' },
];

function useLanguage() {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem('language');
    if (stored) return stored;
    return languages.find(l => l.code.toLowerCase() === i18n.language.toLowerCase())?.code || i18n.language;
  });

  useEffect(() => {
    const handler = () => {
      setLang(i18n.language);
      localStorage.setItem('language', i18n.language);
    };
  
    return () => { i18n.off('languageChanged', handler); };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setLang(lng);
  };
  return { lang, changeLanguage };
}

export const LanguageSelect = () => {
  const { lang, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = languages.find(l => l.code === lang);

  return (
    <div ref={ref} className="custom-select" style={{ position: 'relative', }}>
      <div
        className="custom-select__selected"
      style={{cursor: 'pointer' }}
        onClick={() => setOpen(o => !o)}
      >
        {current ? current.label : lang}
      </div>
      {open && (
        <ul
          className="custom-select__list"

        >
          {languages?.map(l => (
            <li
              key={l.code}
              onClick={() => {
                changeLanguage(l.code);


                setOpen(false);
              }}
              style={{
                padding: '6px 12px',
                cursor: 'pointer',
                background: lang === l.code ? '#f0f0f0' : '#fff',
                fontWeight: lang === l.code ? 'bold' : 'normal'
              }}
              className={lang === l.code ? 'active-language' : ''}
            >
              {l.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};