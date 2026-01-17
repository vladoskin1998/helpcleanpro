import React, { useEffect, useState } from 'react';

export const SwitchTheme = () => {
  const [dark, setDark] = useState(() => document.body.getAttribute('data-theme') === 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', dark ? 'dark' : '');
  }, [dark]);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        gap: 8,
      }}
      onClick={() => setDark(v => !v)}
    >
      <div
        style={{
          width: 44,
          height: 24,
          borderRadius: 12,
          background: dark ? '#222a36' : '#ddd',
          position: 'relative',
          transition: 'background 0.3s',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 2,
            left: dark ? 22 : 2,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: dark ? '#fff' : '#222',
            transition: 'left 0.3s, background 0.3s',
            boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
          }}
        />
      </div>
      <span style={{ color: dark ? '#222a36' : '#222', fontWeight: 500, fontSize: 15 }}>
        {dark ? 'Тёмная' : 'Светлая'}
      </span>
    </div>
  );
};