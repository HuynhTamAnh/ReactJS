//cấu hình store

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/usersSlice";

export const store: any = configureStore({
  reducer: {
    usersSlice: reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
