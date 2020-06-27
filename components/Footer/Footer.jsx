import React from 'react'
import styles from './Footer.module.scss'
import SocialLink from './components/SocialLink'
import Icon from '../Icon'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.chapterInfo}>
        <p className={styles.text}>This website courtesy of Costa Rica Fade To Black</p>
        <SocialLink className={styles.socialLink} href='https://www.facebook.com/pg/CostaRicaFadeToBlack/'>
          <Icon icon='icon-facebook' />
        </SocialLink>
        <SocialLink className={styles.socialLink} href='https://twitter.com/CR_FadeToBlack'>
          <Icon icon='icon-twitter' />
        </SocialLink>
        <SocialLink className={styles.socialLink} href='https://www.instagram.com/costaricafadetoblack/'>
          <Icon icon='icon-instagram' />
        </SocialLink>
      </div>
      <div className={styles.authorInfo}>
        <p className={styles.text}>Website by Mario Retana</p>
        <SocialLink className={styles.socialLink} href='https://github.com/maretana'>
          <Icon icon='icon-github' />
        </SocialLink>
        <SocialLink className={styles.socialLink} href='https://www.linkedin.com/in/marioretana/'>
          <Icon icon='icon-linkedin' />
        </SocialLink>
      </div>
    </footer>
  )
}
