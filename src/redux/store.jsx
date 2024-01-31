// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import bookingReducer from "./slices/bookingSlice";

const persistConfig = {
  key: "root",
  storage,
   // serialize Default: true
};

const persistedReducer = persistReducer(persistConfig, bookingReducer);

const store = configureStore({
  reducer: {
    booking: persistedReducer,
 
  },
});

const persistor = persistStore(store);

export { store, persistor };
