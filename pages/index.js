import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'

export default function IndexPage () {
  const [sortedStreams, setSortedStreams] = useState([])
  const minThreshold = 60000
  const maxThreshold = -3 * 60 * 60 * 1000

  function sortStreams (streams) {
    const past = []
    const present = []
    const future = []
    streams.forEach(stream => {
      if (stream.hasFinished || getUpdatedRemainingTime(stream.remainingTime) < maxThreshold) {
        past.push(stream)
      } else if (getUpdatedRemainingTime(stream.remainingTime) > minThreshold) {
        future.push(stream)
      } else {
        present.push(stream)
      }
    })

    return present.concat(future)
  }

  function getUpdatedRemainingTime (remainingTime) {
    return remainingTime - (Date.now() - window.countStart)
  }

  useEffect(() => {
    window.countStart = Date.now()
    fetch('/api/getEvents').then(response => response.json()).then(events => {
      setSortedStreams(sortStreams(
        events.sort((a, b) => b.remainingTime - a.remainingTime)
      ))
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const streams = sortStreams(sortedStreams)
      if (streams.length && sortedStreams[0].band !== streams[0].band) {
        setSortedStreams(sortStreams(sortedStreams))
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
