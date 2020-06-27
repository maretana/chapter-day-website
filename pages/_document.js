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
          <meta property='og:image' content='https://metallica-chapter-day.vercel.app/social.jpg' />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='900' />
          <meta property='og:image:alt' content='Metallica Chapter Day - Live Stream' />
          <meta property='og:image:type' content='image/jpeg' />
          <meta property='og:url' content='https://metallica-chapter-day.vercel.app/' />
          <meta property='og:title' content='Metallica Chapter Day - Live Stream' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content="It's Metallica Chapter Day 2020! Checkout the live streams and schedules of all the bands and chapters celebrating this day." />
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
