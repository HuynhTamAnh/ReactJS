// import { store } from './index';
// import { store } from "./index";
import { countSlice } from "./reducers/index";
import { combineReducers, createStore } from "redux";
import { reducer, studentSlice } from "./slice/studentSlice";
import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./reducers/userReducer";
// import { userReducer2 } from "./reducers/userReducer2";
// import { userReducer3 } from "./reducers/userReducer3";
// import { userReducer4 } from "./reducers/userReducer4";
// import { userReducer5 } from "./reducers/userReducer5";
// import { userReducer6 } from "./reducers/userReducer6";
// import { userReducer } from "./reducers/userReducer";
// import { toolkit } from "../store/reducers/countSlice";
// const store = combineReducers({
//   countSlice: countSlice.reducer,
//   // userStore: userReducer,
//   // userStore2: userReducer2,
//   // userStore3: userReducer3,
//   // userStore4: userReducer4,
//   // userStore5: userReducer5,
//   // userStore6: userReducer6,

//   studentSlice: studentSlice.reducer,
// });

export const store: any = configureStore({
  reducer: {
    // countSlice: countSlice.reducer,
    student: studentSlice.reducer,
  },
});
// export type StoreInterface = ReturnType<typeof store>;

// export const store = createStore(RootReducer);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
