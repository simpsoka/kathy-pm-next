import './styles.css'
import Script from 'next/script';

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' ? (
            // TODO: Verify if `Script` strategy `afterInteractive` is optimal for the analytics script, or if `lazyOnload` might be better for performance.
            <Script id="insights" src="/va/script.js" strategy="afterInteractive" />
          ) : null}
    </Layout>
  );
}
