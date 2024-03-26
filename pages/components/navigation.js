import React from 'react'
import styles from './nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <div class={styles.whole}>
        <div class={styles.container}>
            <ul>
                <Link href='/'> <li>Welcome!</li> </Link>
                <Link href='/blog'> <li>All Teams</li> </Link>
                <Link href='/about'> <li>About me</li> </Link>
            </ul>
        </div>
    </div>
  )
}

export default Nav