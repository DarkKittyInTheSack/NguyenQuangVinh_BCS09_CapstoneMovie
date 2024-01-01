import { asyncThunkCreator, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quanLyVe } from '../../services/quanLyVe';
import axios from 'axios';

export const getTicketAsyncThunk = createAsyncThunk('ticket/getAllSeat', async (data,thunkAPI) =>{
    try {
        const result = await quanLyVe.getTicket()
        return result.data
    } catch (error) {
        return error
    }
})

const initialState = {
    listSeat:[]
}

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(getTicketAsyncThunk.fulfilled, (state,action) =>{
        
        console.log(action.payload)
        state.listSeat = action.payload
        console.log(state.listSeat);
    } )
  }
});

export const {} = ticketSlice.actions

export default ticketSlice.reducer