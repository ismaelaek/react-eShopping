import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "./usersSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        users: usersSlice,
        products: productsSlice,
        cart : cartSlice
    }
})