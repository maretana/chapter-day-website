import React from 'react'
import styles from './Layout.module.scss'
import Navigation from '../Navigation/Navigation'

export default function Layout ({ children }) {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
