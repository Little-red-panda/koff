import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import categoriesReducer from "./categories/categories.slice";
import cardsReducer from "./cards/cards.slice";
import cardReducer from "./card/card.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    cards: cardsReducer,
    card: cardReducer,
  },
});
