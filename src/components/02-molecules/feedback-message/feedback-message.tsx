import { useEffect } from 'react'
import { MouseEventHandler, ReactElement } from 'react'
import styles from './feedback-message.module.scss'

type Props = {
    feedbackTitle?: string,
    feedbackSubtitle?: string,
    feedbackDescription?: string | ReactElement | (string | ReactElement)[],
    feedbackButton?: string,
    buttonAction?: MouseEventHandler<HTMLButtonElement>,
    buttonType?: 'button' | 'submit' | 'reset',
    messageId: string
}

export default function FeedbackMessage({
    feedbackTitle,
    feedbackSubtitle,
    feedbackDescription,
    feedbackButton,
    buttonAction,
    buttonType = 'button',
    messageId }: Props) {

    useEffect(() => {
        const element = document.querySelector(`#${messageId}`)
        const top = element?.getBoundingClientRect().top
        if(top) {
            window.scroll({
                top: top,
                left: 100,
                behavior: "smooth",
              });
        }
    }, [])

    return (
        <section id={messageId} className={styles['feedback-message']}>
            <h2 className={styles['feedback-message__title']}>
                {feedbackTitle}
            </h2>
            <h3 className={styles['feedback-message__subtitle']}>
                {feedbackSubtitle}
            </h3>
            <div className={styles['feedback-message__description']}>
                {feedbackDescription}
            </div>
            <button type={buttonType} onClick={buttonAction} className={styles['feedback-message__button']}>
                {feedbackButton}
            </button>
        </section>
    )
}