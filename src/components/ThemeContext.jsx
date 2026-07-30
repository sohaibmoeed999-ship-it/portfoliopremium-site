import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme-preference') || 'system';
  });

  const [activeTheme, setActiveTheme] = useState('dark'); // Current resolved theme ('dark' or 'light')

  useEffect(() => {
    const handleThemeChange = () => {
      const body = document.body;
      let resolvedTheme = theme;

      if (theme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        resolvedTheme = systemPrefersDark ? 'dark' : 'light';
      }

      if (resolvedTheme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        setActiveTheme('dark');
      } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        setActiveTheme('light');
      }
    };

    handleThemeChange();
    localStorage.setItem('theme-preference', theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => handleThemeChange();
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, activeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
