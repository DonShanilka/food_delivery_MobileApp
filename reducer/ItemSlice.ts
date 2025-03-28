import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { Item } from '@/model/Item';

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
})