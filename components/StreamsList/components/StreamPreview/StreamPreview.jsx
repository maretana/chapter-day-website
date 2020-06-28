import React from 'react'
import styles from './StreamPreview.module.scss'
import FacebookVideo from '../FacebookVideo'
import YoutubeVideo from '../YoutubeVideo'

export default function StreamPreview ({ link, style }) {
  const isFacebookVideo = /.*facebook.*videos.*/g.test(link)
  const isFacebookEvent = /.*facebook.*events.*/g.test(link)
  const isYoutubeVideo = /.*youtube.*embed/g.test(link)
  const isPage = !isFacebookVideo && !isFacebookEvent && !isYoutubeVideo
  return (
    <div className={styles.streamPreview}>
      {isFacebookVideo && (
        <FacebookVideo url={link} className={styles.facebookVideo} style={style} />
      )}
      {isYoutubeVideo && (
        <YoutubeVideo url={link} className={styles.youtubeVideo} />
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
