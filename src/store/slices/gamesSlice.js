import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import gamesService from "../gamesServive";


export const getGames = createAsyncThunk('GET_GAMES', async(_, thunkAPI) => {
    try {
        return await gamesService.getGames()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});


const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        games: null,
        isError: false,
        isLoading: false
    },

    extraReducers: (builder) => {
        builder.addCase(getGames.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getGames.fulfilled, (state, action) => {
            state.isLoading = false
            state.planes = action.payload
        });
        builder.addCase(getGames.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.planes = null;
        })
    }
});

export default gamesSlice.reducer;