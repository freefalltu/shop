import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import { baseApi } from "src/api/query/baseApi";

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
