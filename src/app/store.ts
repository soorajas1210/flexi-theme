import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import productReducer from "../features/products/productSlice";
import type { ThemeType } from "../types/theme";

const savedTheme = localStorage.getItem("theme") as ThemeType | null;

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productReducer,
  },
  preloadedState: {
    theme: {
      currentTheme: savedTheme || "default",
    },
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
