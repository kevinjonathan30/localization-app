import Head from "next/head";
import { useContext } from 'react';
import AppContext from '@/context/AppContext';
import localization from '@/public/localization.json';

export default function Home() {
  const context = useContext(AppContext);
  const l = localization[context.language];

  return (
    <>
      <Head>
        <title>Localization App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>{l.title}</h1>
        <p>{l.subtitle}</p>
        <button onClick={() => context.setLanguage(context.language === 'en' ? 'ja' : 'en')}>Change Language</button>
      </div>
    </>
  );
}
