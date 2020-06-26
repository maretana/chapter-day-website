import '../styles/styles.scss'
import Layout from '../components/Layout/Layout'

// This default export is required in a new `pages/_app.js` file.
export default function ChapterDayWebsite ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
