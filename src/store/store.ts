import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "api/query/baseApi";
import userSlice from "./reducers/userSlice";
import { authApi } from "api/query/authApi";

const rootReducer = combineReducers({
  userSlice,
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(baseApi.middleware)
        .concat(authApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
