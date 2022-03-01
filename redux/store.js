import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import cartSlice from './cartSlice'
import orderSlice from './orderSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        order: orderSlice,
    },
})