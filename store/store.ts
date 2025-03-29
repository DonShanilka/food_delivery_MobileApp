import { configureStore } from "@reduxjs/toolkit";

import itemReducer from '../reducer/ItemSlice'
import cartReducer from '../reducer/CartSlice'

export const store = configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
  }
})

export default store;