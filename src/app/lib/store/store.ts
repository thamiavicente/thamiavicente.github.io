import { configureStore } from '@reduxjs/toolkit'
import formReducer from '@/components/02-molecules/form/formSlice'
import recaptchaSlice from '@/components/01-atoms/recaptcha/recaptchaSlice'

export const makeStore = () => {
  return configureStore({
  reducer: {
    form: formReducer,
    recaptcha: recaptchaSlice
  }
})}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']