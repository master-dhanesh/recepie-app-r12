import { configureStore } from '@reduxjs/toolkit'
import recipeSlice from './reducers/recipeSlice'

export const store = configureStore({
  reducer: {
    recipeSlice: recipeSlice
  },
})