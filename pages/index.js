import React from 'react'
import Logo from '../components/Logo'
import Head from 'next/head'
import Link from 'next/link'

export default function IndexPage () {
  return (
    <div>
      <Head>
        <title>Metallica Chapter Day - Live Stream</title>
      </Head>
      <Logo />
      <div style={{ textAlign: 'center', fontSize: 20, margin: '10px 0 18vh' }}>
        <p style={{ marginBottom: '0.5em' }}>Thanks for tuning in to Metallica Chapter Day 2020! Hope you enjoyed.</p>
        <p style={{ marginBottom: '0.5em' }}>Please show your support to participating bands and local chapters by dropping a like or follow in their social media.</p>
        <p style={{ marginBottom: '0.5em' }}>If you would like to re-experience some of the live streams, checkout the <Link href='/past'><a>past streams</a></Link></p>
      </div>
    </div>
  )
}
