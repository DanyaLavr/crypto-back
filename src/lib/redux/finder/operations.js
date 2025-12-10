import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSuggestions = createAsyncThunk(
  "finder/fetchSuggestions",
  async (query, thunkAPI) => {
    try {
      if (!query) return [];
      const res = await axios.get(`/api/search?query=${query}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
