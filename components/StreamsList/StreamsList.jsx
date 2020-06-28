import React from 'react'
import styles from './StreamsList.module.scss'
import StreamListItem from './components/StreamListItem'

export default function StreamsList ({ streams = [] }) {
  return (
    <ul className={styles.streamsList}>
      {streams.map(stream => {
        return <StreamListItem key={stream.band + stream.startTime} stream={stream} />
      })}
      {streams.length === 0 && (
        <div className={styles.emptyList}>
          <p>No streams to show in here</p>
        </div>
      )}
    </ul>
  )
}
