import React from 'react'
import styles from './StreamListItem.module.scss'
import getTitleString from '../../../../utils/getTitleString'
import getUpdatedRemainingTime from '../../../../utils/getUpdatedRemainingTime'
import StreamPreview from '../StreamPreview'
import { MIN_CURRENT_STREAM_AGE } from '../../../../utils/consts'

export default function StreamListItem ({ stream }) {
  const remainingTime = getUpdatedRemainingTime(stream.remainingTime)
  const isFuture = remainingTime > MIN_CURRENT_STREAM_AGE

  function displayTime () {
    const seconds = 1000
    const minutes = 60 * seconds
    const hours = 60 * minutes
    const hoursRemaining = Math.floor(remainingTime / hours)
    const minutesRemaining = Math.floor((remainingTime - (hoursRemaining * hours)) / minutes)
    const secondsRemaining = Math.floor((remainingTime - (hoursRemaining * hours) - (minutesRemaining * minutes)) / seconds)
    return `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`
  }

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
        {isFuture && (
          <p className={styles.countdown}>Remaining time: {displayTime()}</p>
        )}
        <StreamPreview link={stream.link} style={stream.style} />
      </div>
    </li>
  )
}
