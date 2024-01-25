import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import categoriesReducer from "./categories/categories.slice";
import cardsReducer from "./cards/cards.slice";
import cardReducer from "./card/card.slice";
import favoriteReducer from "./favorite/favorite.slice";
import cartReducer from "./cart/cart.slice";
import { apiTokenErrorMiddleware } from "./middleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    cards: cardsReducer,
    card: cardReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
});
