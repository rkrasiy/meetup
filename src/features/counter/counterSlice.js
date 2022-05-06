import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'favorites',
  initialState:  [],
  reducers: {
    addToFavorites: (state, action) => {
      const { id  } = action.payload
      state.push(id)
    },
    removeFromFavorites: (state, action) => {
      const { id } = action.payload
      let oldList = state;
      let index = oldList.indexOf(id);
      let newList = oldList.splice(index, 1);
      state = newList;
    }
  },
})

export const { addToFavorites, removeFromFavorites } = counterSlice.actions

export default counterSlice.reducer