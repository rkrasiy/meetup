import { configureStore } from '@reduxjs/toolkit';
import cartsReducer from './carts-slice';
import uiReducer from './ui-slice';
import favoritesReducer from './favorites-slice';

export default configureStore({
  reducer: {
     carts: cartsReducer,
     ui: uiReducer,
     favorites: favoritesReducer
  },
})