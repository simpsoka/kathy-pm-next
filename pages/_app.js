import 'tailwindcss/tailwind.css';
import './styles.css'

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
