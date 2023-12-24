import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { value: [], isLoading: false, error: null }

export const getProducts = createAsyncThunk('prods/getProducts', async (ThunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3006/products');
        console.log(response.data)
        return response.data;
    } catch (error) {
        return ThunkAPI.rejectedWithValue(error.message);
    }
})


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.value = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default productsSlice.reducer;

