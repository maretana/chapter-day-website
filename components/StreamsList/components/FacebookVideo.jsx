import React from 'react'

export default function FacebookVideo ({ url, className }) {
  const src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`
  return (
    <div className={className}>
      <iframe
        src={src}
        scrolling='no'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
        allowFullScreen
      />
    </div>
  )
}
