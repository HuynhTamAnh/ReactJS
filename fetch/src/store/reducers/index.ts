// import { combineReducers } from "redux";

import { createSlice } from "@reduxjs/toolkit";

// export const reducer = (
//   state: number = 0,
//   action: { type: string; payload: number }
// ) => {
//   console.log(state, 1);
//   switch (action.type) {
//     case "INCREASEMENT_N":
//       state += action.payload;
//       console.log(state, 2);
//       return state;
//     case "DECREASEMENT_N":
//       state -= action.payload;
//       return state;
//     case "POWER_UP_N":
//       state = Math.pow(state, action.payload);
//       return state;

//     default:
//       return state;
//   }
// };
// export const root = combineReducers({ count: reducer });

//create Slice: vừa tạo reducer vừa tạo action
export const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
    powerUp: (state, action) => Math.pow(state, action.payload),
  },
});
export const { increment, decrement, powerUp } = countSlice.actions;
