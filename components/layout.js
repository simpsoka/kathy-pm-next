import Head from 'next/head';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react'


export default function Layout({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    if (window.localStorage.theme === 'dark' ||
    (!('theme' in window.localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      toggleDarkOn(document);
    } else {
      toggleDarkOff(document);
    }
  }, [])

  const toggleDarkOn = (d) => {
    const w = d.defaultView;
    w.localStorage.theme = 'dark'
    setDarkMode(true);
  }

  const toggleDarkOff = (d) => {
    const w = d.defaultView;
    w.localStorage.theme = 'default'
    setDarkMode(false)
  }

  const clickedDarkToggle = (el) => {
    const document = el.target.ownerDocument;
    (window.localStorage.theme === 'dark') ? toggleDarkOff(document) : toggleDarkOn(document)
  }

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content="Kathy Korevec Product Manager" />
        <meta name="viewport" content="user-scalable=0, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta property="og:title" content="Kathy Korevec" />
        <meta property="og:description" content="Kathy Korevec: Head of Product at Vercel"  />
        <meta property="og:image" content="https://kathy.pm/images/avatar-compressed.webp"  />

        <title>kathy.pm</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/FreightTextProBook-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/jaf-bernino-sans-400.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/jaf-bernino-sans-700.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="page-container dark:bg-gray-800">
        <div className="header-bar fancy-background" />
        <div className="antialiased flex flex-col items-center justify-center min-h-screen py-2 px-4 max-w-3xl pb-16 mx-auto">
          <header className="flex lg:mt-12 mt-6 lg:mb-16 mb-6 justify-between w-full items-center">
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.34 277.42" className="w-12 h-12 logo">
                <defs>
                  <linearGradient id='g1' gradientUnits='userSpaceOnUse' x1='100.83%' y1='50.86%' x2='-0.83%' y2='49.14%'>
                  <stop offset='0.1' stopColor='#EA2595'/>
                  <stop offset='0.6' stopColor='#9564FF'/>
                  <stop offset='0.9' stopColor='#00F0E0'/>
                  <stop offset='2' stopColor='#86F789'/>
                  </linearGradient>
                </defs>
                <polygon fill="url(#g1)" points="160.17 0 0 277.42 320.34 277.42 160.17 0"/>
                <path fill="white" className="cls-1" d="M180,234.14l-31.19-42.82L137.2,203.39v30.75H115.07V133.56H137.2v44l40.8-44h26.73l-40.95,42.67,42.82,57.91Z" transform="translate(0.17 -0.05)"/>
              </svg>
            </Link>
            <nav className="flex justify-right gap-12 text-center text-s border-2 border-purple-600 dark:border-purple-400 rounded-full text-purple-600 hover:text-white hover:bg-purple-600 font-bold uppercase tracking-wide fancy-border hover:fancy-background dark:text-purple-400 dark:hover:text-gray-900 dark:hover:bg-purple-400">
              <Link href="/contact" className="no-underline cursor-pointer">
                <span className="p-2 px-4 block cursor-pointer">Say Hi 👋</span>
              </Link>
            </nav>
          </header>
          <div className="main w-full">{children}</div>
          <button className="dark-toggle-button rounded-full border-2 p-3 my-10" aria-label="Toggle Dark Mode" onClick={clickedDarkToggle}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            	 viewBox="0 0 166 163" className="w-8 h-8 dark-toggle">
              <circle cx="83.25" cy="81.75" r="29.75"/>
              <line x1="83" y1="14" x2="83" y2="27"/>
              <line x1="83" y1="137" x2="83" y2="150"/>
              <line x1="131.08" y1="33.92" x2="121.89" y2="43.11"/>
              <line x1="44.11" y1="120.89" x2="34.92" y2="130.08"/>
              <line x1="30.54" y1="34" x2="39.73" y2="43.19"/>
              <line x1="117.51" y1="120.97" x2="126.7" y2="130.16"/>
              <line x1="11" y1="82" x2="24.76" y2="82"/>
              <line x1="141.24" y1="82" x2="155" y2="82"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
