import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {value : null, isLoading : false, error : null}

export const login = createAsyncThunk('users/login', async (user, ThunkAPI) => {
    const {rejectedWithValue} = ThunkAPI
    try {
        const response = await axios.get('http://localhost:3006/users');
        const user = response.data.find(item => item.username === user.username && item.password === user.password)
        if (!user) {
            throw new Error('Username or password incorrect !')
        }
        return user;
    } catch (error) {
        console.log(error);
        return rejectedWithValue('Something went wrong! Please try again later')
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.isLoading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.value = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})


export default usersSlice.reducer;
