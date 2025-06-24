'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { FavIcon, LocationIcon, EmailIcon } from '@/components/01-atoms/icons'
import ContactForm from '@/components/03-organisms/contact-form/contact-form'

export default function Contact() {
    const [isConnected, setIsConnected] = useState(false)
    
    useEffect(() => {
        const checkConnection = async () => {
            const connection = await (await fetch('/api/contactFormMail', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })).json()
            if (connection.status === 200) setIsConnected(true)
          }
      
        checkConnection()
    }, [])

    return (
        <main className={styles['contact']}>
            <section className={styles['contact__information']}>
                <p className={styles['contact__projects']}>
                    <FavIcon></FavIcon>
                    <a className={styles['contact__projects-link']} target='_blank' rel="noopener noreferrer" href="https://gist.github.com/thamiavicente/d24ec39d380896e03a22896ae4a55c8f">Projects</a>
                </p>
                <p className={styles['contact__location']}>
                    <LocationIcon></LocationIcon>                
                    <span>Veldhoven, Netherland</span>
                </p>
                <h1 className={styles['contact__email']}>
                    <p className={styles['contact__call-to-action']}>Contact me via e-mail:</p>
                    <a href="mailto:thamiavicente@gmail.com" className={styles["contact__email-link"]}>
                        <EmailIcon></EmailIcon>
                        <span>thamiavicente@gmail.com</span>
                    </a>
                </h1>
            </section>
            { isConnected && <ContactForm></ContactForm> }
        </main>
    )
}