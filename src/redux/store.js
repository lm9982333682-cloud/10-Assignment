import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './features/cart/cartSlice.js';


const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    }
});

export default store