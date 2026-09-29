import React, { useEffect, useState } from 'react';
import '../../style/switch.scss';
import { useTranslation } from 'react-i18next';

export const SwitchTheme = () => {
  const { t } = useTranslation();
  const [dark, setDark] = useState(() => {
    const theme = localStorage.getItem('theme');
    if (theme) return theme === 'dark';
    // По умолчанию — тёмная тема
    return true;
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', dark ? 'dark' : '');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div
      className={`switch-theme${dark ? ' switch-theme--dark' : ''}`}
      onClick={() => setDark(v => !v)}
    >
      <div className="switch-theme__track">
        <div
          className="switch-theme__thumb"
          style={{ left: dark ? 22 : 2 }}
        />
      </div>
      <span className="switch-theme__label">
        {dark ? t('theme.dark') : t('theme.light')}
      </span>
    </div>
  );
};