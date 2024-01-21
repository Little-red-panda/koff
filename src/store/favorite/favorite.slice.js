import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchFavorite = createAsyncThunk(
  "favorite/fetchFavorite",
  async (favoriteList, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;
    const response = await fetch(
      `${API_URL}api/products?list=${favoriteList}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      if (response.status === 401) {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: "Не удалось получить список избранных товаров!",
        });
      }
      throw new Error("Не удалось получить список избранных товаров!");
    }

    return response.json();
  },
);

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem("favorite") || "[]"),
  data: null,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteList.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
    removeFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (id) => id !== action.payload,
      );
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.pagination = null;
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.data = action.payload;
          state.pagination = null;
        } else {
          state.data = action.payload.data;
          state.pagination = action.payload.pagination;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.pagination = null;
      });
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
