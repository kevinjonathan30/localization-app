import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import AppContext from '@/context/AppContext';

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const updateLanguage = () => {
      const browserLanguage = navigator.language || navigator.userLanguage;
      setLanguage(browserLanguage.startsWith('ja') ? 'ja' : 'en');
    };

    updateLanguage();

    window.addEventListener('languagechange', updateLanguage);

    return () => {
      window.removeEventListener('languagechange', updateLanguage);
    };
  }, []);

  return <AppContext.Provider value={{ language, setLanguage }}>
    <Component {...pageProps} />
  </AppContext.Provider>;
}
