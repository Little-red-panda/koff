import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCardsData = createAsyncThunk(
  "cards/fetchCardData",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;
    const response = await fetch("https://koff-api.vercel.app/api/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Не удалось получить список товаров!");
    }

    return response.json();
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCardsData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCardsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cardsSlice.reducer;
