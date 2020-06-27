import React from 'react'
import styles from './StreamPreview.module.scss'
import FacebookVideo from '../FacebookVideo'

export default function StreamPreview ({ link }) {
  const isFacebookVideo = /.*facebook.*videos.*/g.test(link)
  const isFacebookEvent = /.*facebook.*events.*/g.test(link)
  const isPage = !isFacebookVideo && !isFacebookEvent
  return (
    <div className={styles.streamPreview}>
      {isFacebookVideo && (
        <FacebookVideo url={link} className={styles.facebookVideo} />
      )}
      {isFacebookEvent && (
        <a className={styles.eventLink} href={link} target='_blank' rel='noopener noreferrer'>Go to event page</a>
      )}
      {isPage && (
        <a className={styles.pageLink} href={link} target='_blank' rel='noopener noreferrer'>Go to stream's page</a>
      )}
    </div>
  )
}
