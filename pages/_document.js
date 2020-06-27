import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='es'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link href='https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap' rel='stylesheet' />
          <meta httpEquiv='Cache-Control' content='max-age=200' />
          <meta property='og:image' content='/social.jpg' />
          <meta property='og:image' content='https://metallica-chapter-day.vercel.app/social.jpg' />
          <meta property='og:image:width' content='1280px' />
          <meta property='og:image:height' content='900px'
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
