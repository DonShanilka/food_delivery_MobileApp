import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { Item } from '@/model/Item';
import { act } from 'react';

const initialState: Item[] = [];

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchItems = createAsyncThunk('item/saveItem', async (itemData: Item) => {
  try {
    const response = await api.get('/api/item/getAllItem');
    console.log("response: ", response.data);
  } catch (error) {
    console.log("Canot fetchItems: ", error);
  }
});

const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        console.log("Failed to Get Items", action.payload)
      })
      .addCase(fetchItems.pending, () => {
        console.log("Fetching Item Pending ...")
      })
  }
})