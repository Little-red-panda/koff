import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchCardData = createAsyncThunk(
  "card/fetchCardData",
  async (productId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;
    const response = await fetch(`${API_URL}api/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: "Не удалось получить информацию о товаре!",
        });
      }
      throw new Error("Не удалось получить информацию о товаре!");
    }

    return response.json();
  },
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cardSlice.reducer;
