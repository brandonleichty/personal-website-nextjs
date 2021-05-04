import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta
            property="og:image"
            content="https://www.brandonleichty.com/images/og-default-purple-blue.png"
            key="ogimage"
          />
          <meta property="og:image:width" content="1280" key="ogimagewidth"/>
          <meta property="og:image:height" content="675" key="ogimageheight"/>
        </Head>
        <body className="bg-white dark:bg-dark-navy-2 text-almost-black dark:text-white transition-colors">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
