import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import getUpdatedRemainingTime from '../utils/getUpdatedRemainingTime'

export default function IndexPage () {
  const [streams, setStreams] = useState([])
  const minThreshold = 60000
  const maxThreshold = -3 * 60 * 60 * 1000

  function filterStreams (streams) {
    return streams.filter(stream => {
      return getUpdatedRemainingTime(stream.remainingTime) > minThreshold &&
      !(stream.hasFinished && getUpdatedRemainingTime(stream.remainingTime) < maxThreshold)
    })
  }

  useEffect(() => {
    window.countStart = Date.now()
    fetch('/api/getEvents').then(response => response.json()).then(events => {
      setStreams(filterStreams(events))
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const filtered = filterStreams(streams)
      if (filtered.length && streams[0].band !== filtered[0].band) {
        setStreams(filterStreams(streams))
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Logo />
    </div>
  )
}
