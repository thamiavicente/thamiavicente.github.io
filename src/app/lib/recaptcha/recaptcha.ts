declare global {
    const grecaptcha: {
        ready: (cb: () => void) => void;
        execute: (
            siteKey: string,
            options: { action: string }
        ) => Promise<string>
    }
}

export const validateToken = async (token: string) => {
    const SECRET_KEY = process.env.GOOGLE_SECRET_RECAPTCHA_KEY;
    const requestValidateToken = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`;

    try {
        const response = await fetch(requestValidateToken, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        
        const responseJson = await response.json()
        const scoreNotValid = responseJson.score < 0.5

        if(!responseJson.success || scoreNotValid) {
            return {
                status: 500,
                error: true,
                message: scoreNotValid ? scoreNotValid : JSON.stringify(responseJson)
            }
        }

        return {
            status: 200,
            success: true,
            score: responseJson.score
        }
    } catch (error) {
        return {
            status: 500,
            error: true,
            message: error
        }
    }
}

export const generateToken = () => {
    const SITE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PUBLIC_RECAPTCHA_KEY || ''
    return new Promise<string>((resolve, reject) => {
        grecaptcha.ready(() => {
            grecaptcha
                .execute(SITE_KEY, { action: 'submit' })
                .then(token => {
                    resolve(token)
                })
                .catch(err => {
                    reject(err)
                })
        })
    })
}