import React from 'react'

export default function SocialLink ({ className, children, href }) {
  return (
    <a className={className} href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}
