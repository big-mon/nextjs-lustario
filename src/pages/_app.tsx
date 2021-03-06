import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalHeader from "components/organisms/GlobalHeader";
import GlobalFooter from "components/organisms/GlobalFooter";
import NextProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <NextProgress color="rgb(185, 28, 28)" stopDelayMs={100} height={2} />

      <GlobalHeader />
      <div className="container mx-auto px-6">
        <Component {...pageProps} />
      </div>
      <GlobalFooter />
    </>
  );
}

export default MyApp;
