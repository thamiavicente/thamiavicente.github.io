import { useAppDispatch , useAppSelector } from '@/app/api/store/hooks'
import { setName, setEmail, setTelephone, setMessage, setSuccessSendMessage, setErrorSendMessage } from '@/components/02-molecules/form/formSlice'

import styles from './form.module.scss'

export default function Form() {
    const name = useAppSelector((state) => state.form.name)
    const email = useAppSelector((state) => state.form.email)
    const telephone = useAppSelector((state) => state.form.name)
    const message = useAppSelector((state) => state.form.message)

    const dispatch = useAppDispatch()

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

        if (response.status === 200) {
            dispatch(setSuccessSendMessage(true))
            return
        }
        
        dispatch(setErrorSendMessage(true))
        return
    }

    return (
        <form onSubmit={handleSubmit} method="post" className={styles['form']}>
            <p className={styles['form__separator']}>or send me a message:</p>
            <label className={styles['form__label']}>
                <span className={styles['form__label-text']}>
                    name
                </span>
                <input onChange={e => dispatch(setName(e.target.value))} className={styles['form__input']} type="text" required autoComplete="name" title="name">
                </input>
            </label>
            <label className={styles['form__label']}>
                <span className={styles['form__label-text']}>
                    e-mail
                </span>
                <input onChange={e => dispatch(setEmail(e.target.value))} className={styles['form__input']} type="email" required autoComplete="email" title="e-mail">
                </input>
            </label>
            <label className={styles['form__label']}>
                <span className={styles['form__label-text']}>
                    phone number
                </span>
                <input onChange={e => dispatch(setTelephone(e.target.value))} className={styles['form__input']} type="tel" required autoComplete="phone" title="phone" pattern="^(?=(?:.*\d){8,})[0-9()+.\-]+$">
                </input>
            </label>
            <label className={styles['form__label']}>
                <span className={styles['form__label-text']}>
                    message
                </span>
                <textarea onChange={e => dispatch(setMessage(e.target.value))} className={styles['form__text-area']} rows={10} required></textarea>
            </label>
            <button className={styles['form__button']} type="submit">Send</button>
        </form>
    )
}