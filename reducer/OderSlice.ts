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