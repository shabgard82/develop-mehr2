import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userSlice = createSlice({
  name: 'cart',
  initialState: { cartItems: [],cartDate:[] },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const itemIndex = action.payload;
      state.cartItems.splice(itemIndex, 1);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    addCartDate:(state,action)=>{
      state.cartDate.push(action.payload)
    },
    removeCartDate: (state, action) => {
      const dateIndex = action.payload;
      state.cartDate.splice(dateIndex, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const { addToCart, removeFromCart, clearCart ,addCartDate,removeCartDate} = userSlice.actions;