import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import categoriesReducer from "./categories/categories.slice";
import cardsReducer from "./cards/cards.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    cards: cardsReducer,
  },
});
