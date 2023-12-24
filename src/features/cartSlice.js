import { createSlice } from "@reduxjs/toolkit";
import {message} from 'antd'

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            if (!state.find((item) => item.id === product.id)) {
                state.push(product);
            } else {
                message.warning("This product is already in the shopping cart.")
            }
        },
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload.id)
        },
        clearCart(state){
            return initialState
        }
    }
})

export const { addToCart, removeFromCart , clearCart} = cartSlice.actions
export default cartSlice.reducer;
