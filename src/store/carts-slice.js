import { createSlice } from '@reduxjs/toolkit'

export const cartsSlice = createSlice({
  name: 'carts',
  initialState: {
    items: [],
    changed: false
  },
  reducers: {
    replaceItems: (state, action) => {
      let items = action.payload.items;
      state.items = items
    },
    addItem: (state, action) => {
      state.changed = true;
      let items = state.items;
      let newItem = action.payload.item;
      state.items = [newItem,...items];
    }
  },
})

export const { replaceItems, addItem } = cartsSlice.actions

export default cartsSlice.reducer