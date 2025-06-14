import styles from './page.module.scss'
import { FavIcon, LocationIcon, EmailIcon } from '@/components/01-atoms/icons'

export default function Contact() {
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
            {/* <form className={styles['contact__form']}>
                <p className={styles['contact__separator']}>or send me a message:</p>
                <label className={styles['contact__label']}>
                    <span className={styles['contact__label-text']}>
                        name
                    </span>
                    <input className={styles['contact__input']} type="text" required autoComplete="name" title="name">
                    </input>
                </label>
                <label className={styles['contact__label']}>
                    <span className={styles['contact__label-text']}>
                        e-mail
                    </span>
                    <input className={styles['contact__input']} type="email" required autoComplete="email" title="e-mail">
                    </input>
                </label>
                <label className={styles['contact__label']}>
                    <span className={styles['contact__label-text']}>
                        phone number
                    </span>
                    <input className={styles['contact__input']} type="tel" required autoComplete="phone" title="phone" pattern="^(?=(?:.*\d){8,})[0-9()+.\-]+$">
                    </input>
                </label>
                <label className={styles['contact__label']}>
                    <span className={styles['contact__label-text']}>
                        message
                    </span>
                    <textarea className={styles['contact__text-area']} required></textarea>
                </label>
                <button className={styles['contact__button']} type="submit">Send</button>
            </form> */}
        </main>
    )
}