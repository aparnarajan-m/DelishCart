import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartList: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: () => {},
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
