'use client'

import { useState, useEffect } from 'react';

import styles from './footer.module.scss';
import Cat from '@/components/01-atoms/icons/cat-icon';
import dynamic from "next/dynamic";

const VLibras = dynamic(() => import("@/components/01-atoms/vlibras/vlibras"), { ssr: false })

export default function Footer() {
    const [ userColorScheme, setUserColorScheme ] = useState('dark')

    useEffect(() => {
        const body = document.querySelector('body');
        if (body?.classList.contains('light')) {
          setUserColorScheme('light');
        } else {
          setUserColorScheme('dark');
        }
      }, []);
    
      const changeColorScheme = () => {
        const body = document.querySelector('body');
    
        if (body?.classList.contains('light')) {
          body.classList.remove('light');
          setUserColorScheme('dark');
          return
        }

        body?.classList.add('light');
        setUserColorScheme('light');
      };
    

    return (
        <footer className={styles['footer']}>
            <button onClick={changeColorScheme} className={styles['footer__color-scheme-button']} type="button" aria-label="Change the color scheme &#x1f408;">
                <Cat colorScheme={userColorScheme}></Cat>
            </button>
            <nav className={styles['footer__nav-menu-footer']}>
                <a target="_blank" rel="noopener noreferrer" className={styles['footer__nav-link']} href="https://www.linkedin.com/in/thamiavicente">Linkedin</a>
                <a target="_blank" rel="noopener noreferrer" className={styles['footer__nav-link']} href="https://github.com/thamiavicente">Github</a>
                <a target="_blank" rel="noopener noreferrer" className={styles['footer__nav-link']} href="https://thamiavicente.medium.com">Medium</a>
            </nav>
            <VLibras/>
        </footer>
    )
}