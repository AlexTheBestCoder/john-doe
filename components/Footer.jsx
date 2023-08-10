import React from 'react'
import styles from '@/styles/Header.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <Link className={styles.hello} href={'/nos-projets'}>
      <h1>Entrer</h1>
    </Link>
  )
}
