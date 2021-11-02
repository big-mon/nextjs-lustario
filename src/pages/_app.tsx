import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <header>aa</header>

      <Component {...pageProps} />
      <footer>bbb</footer>
    </>
  );
}

export default MyApp;
