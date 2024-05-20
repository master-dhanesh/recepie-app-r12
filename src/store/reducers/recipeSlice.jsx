import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recipes: [],
}

export const recipeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addRecipe } = recipeSlice.actions

export default recipeSlice.reducer