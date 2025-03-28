import { configureStore } from "@reduxjs/toolkit";

import itemReducer from '../reducer/ItemSlice'

export const store = configureStore({
  reducer: {
    items: itemReducer,
  }
})

export default store;