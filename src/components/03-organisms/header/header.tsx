'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './header.module.scss'

export default function Header() {
  const pathname = usePathname()

  const linkClasses = (href: string) => {
    const navLinkClass = 'header__nav-link'
    return `
      ${styles[navLinkClass]}
      ${pathname === href ? styles[`${navLinkClass}--active`] : ''}
    `
  }    

  return (
    <header className={styles['header']}>
      <nav className={styles['header__nav-menu']}>
        <Link href="/" className={linkClasses('/')}>
          Home
        </Link>
        <Link href="/about" className={linkClasses('/about')}>
          About
        </Link>
        <Link href="/contact" className={linkClasses('/contact')}>
          Contact
        </Link>
      </nav>
    </header>
  )
}
