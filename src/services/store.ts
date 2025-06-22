import { setupListeners } from "@reduxjs/toolkit/query/react";
import { rickAndMortyApi } from "./rickAndMortyApi";
import { configureStore } from "@reduxjs/toolkit/react";

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

setupListeners(store.dispatch);
