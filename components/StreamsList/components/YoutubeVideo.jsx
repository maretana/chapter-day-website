import React from 'react'

export default function YoutubeVideo ({ url, className }) {
  return (
    <div className={className}>
      <iframe
        src={url}
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      />
    </div>
  )
}
