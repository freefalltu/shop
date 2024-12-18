import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import infoProductSlice from "./reducers/infoProductSlice";

const rootReducer = combineReducers({
  productSlice,
  userSlice,
  infoProductSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
