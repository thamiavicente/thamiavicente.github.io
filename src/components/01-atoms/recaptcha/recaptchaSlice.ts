import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/lib/store/store'

export type RecaptchaState = {
    token: string,
    success: boolean,
    errorMessage: string | undefined
}

const initialState: RecaptchaState = {
    token: '',
    success: false,
    errorMessage: ''
}

export const recaptchaSlice = createSlice({
    name: 'recaptcha',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => { state.token = action.payload },
        setSuccess: (state, action: PayloadAction<boolean>) => { state.success = action.payload },
        setErrorMessage: (state, action: PayloadAction<string>) => { state.errorMessage = action.payload },
    }
})

export const {
    setToken,
    setSuccess,
    setErrorMessage
} = recaptchaSlice.actions

export const selectToken = (state: RootState) => state.recaptcha.token
export const selectSuccess = (state: RootState) => state.recaptcha.success
export const selectErrorMessage = (state: RootState) => state.recaptcha.errorMessage

export default recaptchaSlice.reducer