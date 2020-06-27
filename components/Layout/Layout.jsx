import React from 'react'
import styles from './Layout.module.scss'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

export default function Layout ({ children }) {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}
