import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import StreamsList from '../components/StreamsList/StreamsList'
import getUpdatedRemainingTime from '../utils/getUpdatedRemainingTime'
import { STREAM_OLDEST_AGE } from '../utils/consts'

export default function PastStreamsPage () {
  const [streams, setStreams] = useState([])
  const [filteredStreams, setFilteredStreams] = useState([])

  useEffect(() => {
    window.countStart = Date.now()
    fetch('/api/getEvents').then(response => response.json()).then(eventsArray => {
      setStreams(eventsArray)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const nextStreams = streams.filter(stream => {
        const remainingTime = getUpdatedRemainingTime(stream.remainingTime)
        return remainingTime <= STREAM_OLDEST_AGE && stream.hasFinished
      })
      setFilteredStreams(nextStreams)
    })
    return () => clearInterval(interval)
  })

  return (
    <div>
      <Logo />
      <StreamsList streams={filteredStreams} />
    </div>
  )
}
