//cấu hình store

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/usersSlice";
import { postsSlice } from "./slices/postsSlice";

export const store: any = configureStore({
  reducer: {
    usersSlice: reducer,
    postsSlice: postsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
