'use client'
import { useAppSelector, useAppDispatch } from '@/app/lib/store/hooks'
import { useEffect, useCallback } from 'react'
import { setConnected } from '@/components/02-molecules/form/formSlice'

import Form from '@/components/02-molecules/form/form'
import FeedbackMessage from '@/components/02-molecules/feedback-message/feedback-message'

export default function ContactForm() {
    const step = useAppSelector((state) => state.form.step)
    const errorMessage = useAppSelector((state) => state.form.errorSendMessage)

    const dispatch = useAppDispatch()

    const showForm = useCallback(() => { dispatch(setConnected(true)) },[dispatch])

    useEffect(() => {
      const checkConnection = async () => {
          const connection = await (await fetch('/api/contactFormMail', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
          })).json()
          
          if (connection.status === 200) {
            showForm()
            return
          }
          dispatch(setConnected(false))
          return
        }
    
      checkConnection()
    }, [showForm, dispatch])

    return (
      <>
        { step === 'form' && errorMessage
          && <FeedbackMessage
                feedbackTitle="Oooops!"
                feedbackSubtitle="something went wrong :("
                feedbackDescription={[<p key="description">Your message was not sent. Please try again later or send me an email at </p>, <a key="link" href="mailto:thamiavicente@gmail.com">thamiavicente@gmail.com</a>]}
                feedbackButton="try again"
                buttonAction={showForm}>
            </FeedbackMessage>
        }
        { step === 'form' && <Form></Form> }
        { step === 'successSendMessage'
          && <FeedbackMessage
                feedbackTitle="Thank you"
                feedbackSubtitle="for your message :)"
                feedbackDescription="You'll get a reply as soon as possible"
                feedbackButton="send another message"
                buttonAction={showForm}>
            </FeedbackMessage>
        }
      </>
    )
}