import React from 'react'
import styles from './StreamListItem.module.scss'
import getTitleString from '../../../../utils/getTitleString'
import StreamPreview from '../StreamPreview'

export default function StreamListItem ({ stream }) {
  return (
    <li className={styles.listItem}>
      <div>
        <p className={styles.band}>{getTitleString(stream.band)}</p>
        <p className={styles.chapter}>Presented by: {stream.chapter}</p>
        <div className={styles.country}>
          <span className={styles.countryName}>From: {stream.country}</span>
          <img className={styles.countryFlag} src={`/flags/${stream.countryCode}.svg`} alt={`Flag of ${stream.country}`} />
        </div>
        <p className={styles.premiere}>Premiere: {(new Date(stream.startTime)).toLocaleTimeString('en-US')}</p>
        <StreamPreview link={stream.link} style={stream.style} />
      </div>
    </li>
  )
}
