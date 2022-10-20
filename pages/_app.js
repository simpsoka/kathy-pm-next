import 'tailwindcss/tailwind.css';
import './styles.css'
import Script from 'next/script';

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' ? (
            <Script id="insights" src="/va/script.js" strategy="afterInteractive" />
          ) : null}
    </Layout>
  );
}
