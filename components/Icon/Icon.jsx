import React from 'react'
import styles from './Icon.module.scss'

export default function Icon ({ icon }) {
  return (
    <span className={styles[icon]} />
  )
}
