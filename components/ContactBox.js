import React from 'react'
import styles from "../styles/ContactBox.module.css"
import Image from 'next/image'
import Logo from '../public/wettify-logo.webp'
function ContactBox({title, icon, content}) {
  return (
    <div className={styles.contactBox}>
      <h1 className={styles.contactBoxTitle}>{title}</h1>
      <div className={styles.contactBoxContentParent}>
        <Image src={Logo} alt="logo" unoptimized={true} className={styles.contactBoxIcon} width={40} height={50} />
        <span className={styles.contactBoxContent}>{content}</span>
      </div>
    </div>
  )
}

export default ContactBox
