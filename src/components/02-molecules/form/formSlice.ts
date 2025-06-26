import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/api/store/store'

export type FormState = {
    name: string,
    email: string,
    telephone: string,
    message: string,
    connected: boolean,
    successSendMessage: boolean
    errorSendMessage: boolean,
    step: string
}

const initialState: FormState = {
    name: '',
    email: '',
    telephone: '',
    message: '',
    connected: false,
    successSendMessage: false,
    errorSendMessage: false,
    step: ''
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => { state.name = action.payload },
        setEmail: (state, action: PayloadAction<string>) => { state.email = action.payload },
        setTelephone: (state, action: PayloadAction<string>) => { state.telephone = action.payload },
        setMessage: (state, action: PayloadAction<string>) => { state.message = action.payload },
        setConnected: (state, action: PayloadAction<boolean>) => { 
            state.connected = action.payload
            if(action.payload) state.step = 'form'
        },
        setSuccessSendMessage: (state, action: PayloadAction<boolean>) => { 
            state.successSendMessage = action.payload
            if(action.payload) state.step = 'successSendMessage'
        },
        setErrorSendMessage: (state, action: PayloadAction<boolean>) => {
            state.errorSendMessage = action.payload
            if(action.payload) state.step = 'errorSendMessage'
        },
    }
})

export const {
    setName,
    setEmail,
    setTelephone,
    setMessage,
    setConnected,
    setSuccessSendMessage,
    setErrorSendMessage
} = formSlice.actions

export const selectName = (state: RootState) => state.form.name
export const selectEmail = (state: RootState) => state.form.email
export const selectTelephone = (state: RootState) => state.form.telephone
export const selectMessage = (state: RootState) => state.form.message
export const selectConnected = (state: RootState) => state.form.connected
export const selectSuccessSendMessage = (state: RootState) => state.form.successSendMessage
export const selectErrorSendMessage = (state: RootState) => state.form.errorSendMessage

export default formSlice.reducer