'use client';
import { useState } from 'react'
import styles from './contact-form.module.scss'

export default function ContactForm() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ telephone, setTelephone ] = useState('')
    const [ message, setMessage ] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/contactFormMail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                telephone,
                message,
            }),
        })

        //const data = await response.json()
    }

    return (
        <form onSubmit={handleSubmit} method="post" className={styles['contact-form']}>
            <p className={styles['contact-form__separator']}>or send me a message:</p>
            <label className={styles['contact-form__label']}>
                <span className={styles['contact-form__label-text']}>
                    name
                </span>
                <input onChange={e => setName(e.target.value)} className={styles['contact-form__input']} type="text" required autoComplete="name" title="name">
                </input>
            </label>
            <label className={styles['contact-form__label']}>
                <span className={styles['contact-form__label-text']}>
                    e-mail
                </span>
                <input onChange={e => setEmail(e.target.value)} className={styles['contact-form__input']} type="email" required autoComplete="email" title="e-mail">
                </input>
            </label>
            <label className={styles['contact-form__label']}>
                <span className={styles['contact-form__label-text']}>
                    phone number
                </span>
                <input onChange={e => setTelephone(e.target.value)} className={styles['contact-form__input']} type="tel" required autoComplete="phone" title="phone" pattern="^(?=(?:.*\d){8,})[0-9()+.\-]+$">
                </input>
            </label>
            <label className={styles['contact-form__label']}>
                <span className={styles['contact-form__label-text']}>
                    message
                </span>
                <textarea onChange={e => setMessage(e.target.value)} className={styles['contact-form__text-area']} rows={10} required></textarea>
            </label>
            <button className={styles['contact-form__button']} type="submit">Send</button>
        </form>
    )
}