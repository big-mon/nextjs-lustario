import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Noto_Serif_JP } from "@next/font/google";
import GlobalHeader from "components/globalLayout/header";
import GlobalFooter from "components/globalLayout/footer";
import NextProgress from "nextjs-progressbar";

const notoSerif = Noto_Serif_JP({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className={`${notoSerif.className}`}>
        <NextProgress color="rgb(185, 28, 28)" stopDelayMs={100} height={2} />

        <GlobalHeader />
        <div className="container mx-auto px-6">
          <Component {...pageProps} />
        </div>
        <GlobalFooter />
      </div>
    </>
  );
}

export default MyApp;
