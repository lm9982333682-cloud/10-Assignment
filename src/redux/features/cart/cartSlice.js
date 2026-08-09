import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartToggle: false,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showCartToggle: (state, action) => {
            state.cartToggle = action.payload;
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        deleteToCart: (state, action) => {
            state.cart = state.cart.filter(obj => obj.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        changeQty: (state, action) => {
            const { type, id } = action.payload;

            state.cart = state.cart.map(obj => {
                let qty = obj.qty;
                if (type == "+") {
                    qty += 1;
                } else {
                    if (qty > 1) {
                        qty -= 1;
                    }

                };

                if (obj.id === id) {
                    obj.qty = qty;
                };

                return obj;

            });

            localStorage.setItem('cart', JSON.stringify(state.cart));

        }
    }
});

export const { showCartToggle, addToCart, deleteToCart, changeQty } = cartSlice.actions;



export default cartSlice.reducer