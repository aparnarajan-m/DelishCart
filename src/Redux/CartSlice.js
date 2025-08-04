import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartList: [],
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

    }
})

export const { addToCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
