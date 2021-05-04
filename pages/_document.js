import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-dark-navy-2 text-almost-black dark:text-white transition-colors">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument