import Head from 'next/head';
import info from '../data/info.json';
export default function Home() {
  return (
    <div>
      <Head>
        <title>{info['app-name']}</title>
        <meta name="description" content={info['app-description']} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>App Home</h1>
    </div>
  );
}
