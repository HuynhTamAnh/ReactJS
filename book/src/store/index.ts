import { combineReducers, createStore, Store } from "redux";
import { productSlice } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../assets/component/service/axios";

const root = combineReducers({
  productSlice: reducer,
});
export const store: any = configureStore({
  reducer: root,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
