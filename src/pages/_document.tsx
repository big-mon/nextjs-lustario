import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-body bg-gray-100 text-gray-900 min-h-screen overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
