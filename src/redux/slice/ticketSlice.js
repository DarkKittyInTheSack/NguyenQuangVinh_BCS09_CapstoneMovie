import { asyncThunkCreator, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quanLyVe } from '../../services/quanLyVe';
import axios from 'axios';

const data = quanLyVe.getTicket().then((result) => {
    let arr = result.data
    return arr
}).catch((err) => {
    console.log(err);
});

const initialState = {
    listSeat:data
}

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
  
});

export const {} = ticketSlice.actions

export default ticketSlice.reducer