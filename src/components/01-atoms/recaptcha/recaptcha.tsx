import Script from "next/script";

export default function Recaptcha() {
    const SITE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PUBLIC_RECAPTCHA_KEY || ''
    const recaptchaScript = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
    
    return (
        <>
            { SITE_KEY !== '' &&
              <Script src={recaptchaScript} strategy="afterInteractive"></Script>
            }
        </>
    )
}