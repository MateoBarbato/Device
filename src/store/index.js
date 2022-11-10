import { configureStore } from "@reduxjs/toolkit";

import placeReducer from "./place.slice";
import siteReducer from './diveSite.slice'

export const store = configureStore({
  reducer: {
    place: placeReducer,
    sites: siteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

