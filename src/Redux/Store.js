import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'

// Save state to localStorage
const saveToLocalStorage = (state) => {
    try{
        localStorage.setItem("cart", JSON.stringify(state.cart.cartList));
    } catch(e){
        console.warn("Could not save cart to localStorage", e);
    }
}

// Load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (e) {
    console.warn("Could not load cart from localStorage", e);
    return [];
  }
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: {
            cartList: loadFromLocalStorage(),
        }
    }
})

// Save to localStorage on any cart change
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});