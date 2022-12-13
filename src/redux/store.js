import { configureStore } from '@reduxjs/toolkit'
import walletSlice from './reducers/walletSlice'

export const store = configureStore({
  reducer: {
    wallet: walletSlice
  },
})