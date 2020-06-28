import React, { useState } from 'react'
import Logo from '../components/Logo'
import StreamsList from '../components/StreamsList/StreamsList'
import Head from 'next/head'
import events from '../data/streams.json'

export default function PastStreamsPage () {
  const [streams] = useState(events)

  return (
    <div>
      <Head>
        <title>Metallica Chapter Day - Past Streams</title>
      </Head>
      <Logo />
      <StreamsList streams={streams} />
    </div>
  )
}
