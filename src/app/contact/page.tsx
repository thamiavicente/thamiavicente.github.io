'use client'
import StoreProvider  from '@/app/lib/store/store-provider'

import { FavIcon, LocationIcon, EmailIcon } from '@/components/01-atoms/icons'
import ContactForm from '@/components/03-organisms/contact-form/contact-form'

import styles from './page.module.scss'

export default function Contact() {
    return (
        <StoreProvider>
            <main className={styles['contact']}>
                <section className={styles['contact__information']}>
                    <div className={styles['contact__more-information']}>
                        <p className={styles['contact__projects']}>
                            <FavIcon></FavIcon>
                            <a className={styles['contact__projects-link']} target='_blank' rel="noopener noreferrer" href="https://gist.github.com/thamiavicente/d24ec39d380896e03a22896ae4a55c8f">Projects</a>
                        </p>
                        <span className={styles['contact__separator']}>|</span>
                        <p className={styles['contact__location']}>
                            <LocationIcon></LocationIcon>                
                            <span>Veldhoven, Netherland</span>
                        </p>
                    </div>
                    <h1 className={styles['contact__email']}>
                        <p className={styles['contact__call-to-action']}>Contact me via e-mail:</p>
                        <a href="mailto:thamiavicente@gmail.com" className={styles["contact__email-link"]}>
                            <EmailIcon></EmailIcon>
                            <span>thamiavicente@gmail.com</span>
                        </a>
                    </h1>
                </section>
                <ContactForm></ContactForm>
            </main>
        </StoreProvider>
    )
}