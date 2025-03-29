import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Order } from "../model/Order";

const initialState: Order[] = [];

const api = axios.create({
  baseURL: "http://192.168.1.101:3000", 
});

export const AddOrder = createAsyncThunk(
  "order/addOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/order/addOrder", orderData);
      console.log("Order Added Successfully: ", response.data);
      return response.data; // Return the response to the Redux store
    } catch (error) {
      console.error("Cannot add order: ", error);
      return rejectWithValue(error.response?.data || "An error occurred while adding the order");
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddOrder.pending, (state) => {
        console.log("Placing Order..."); // Log during order placement
        state.loading = true;
        state.error = null;
      })
      .addCase(AddOrder.fulfilled, (state, action) => {
        console.log("Order Placed: ", action.payload); // Verify response
        state.loading = false;
        state.orders.push(action.payload); // Add new order to state
      })
      .addCase(AddOrder.rejected, (state, action) => {
        console.error("Order Failed: ", action.error.message); // Log error
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;