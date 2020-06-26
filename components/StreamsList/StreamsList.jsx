import React from 'react'
import styles from './StreamsList.module.scss'
import StreamListItem from './components/StreamListItem'

export default function StreamsList ({ streams = [] }) {
  return (
    <ul className={styles.streamsList}>
      {streams.map(stream => {
        return <StreamListItem key={stream.band} stream={stream} />
      })}
    </ul>
  )
}
