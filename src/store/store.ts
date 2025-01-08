import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "api/query/baseApi";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";

const rootReducer = combineReducers({
  productSlice,
  userSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
