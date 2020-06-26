import React, { useState } from 'react'
import styles from './Navigation.module.scss'
import Link from 'next/link'
import getTitleString from '../../utils/getTitleString'
import Icon from '../Icon'

export default function Navigation () {
  const [isOpen, setIsOpen] = useState(false)
  const navigationListClassName = styles.navigationList + (isOpen ? ` ${styles.open}` : ` ${styles.close}`)

  function toggleNavigation () {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.placeholder}>
      <nav className={styles.navigation}>
        <div className={styles.navigationButtonContainer}>
          <button type='button' onClick={toggleNavigation} className={styles.navigationButton}>
            <Icon icon={isOpen ? 'icon-cross' : 'icon-menu'} />
          </button>
        </div>
        <ul className={navigationListClassName}>
          <li className={styles.listItem}>
            <Link href='/'><a>{getTitleString('Home')}</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/upcoming'><a>{getTitleString('Upcoming Streams')}</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/past'><a>{getTitleString('Past Streams')}</a></Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}
