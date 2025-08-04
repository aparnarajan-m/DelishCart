import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartList:JSON.parse(localStorage.getItem("cart")) || [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const exists = state.cartList.find(item => item.id === action.payload.id);
            if (!exists) {
                state.cartList.push({ ...action.payload, quantity: 1 });
            }
        },

        increaseQty: (state, action) => {
            const item = state.cartList.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQty: (state, action) => {
            const item = state.cartList.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        removeFromCart: (state, action) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload);
        }

    }
})

export const { addToCart, increaseQty, decreaseQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
