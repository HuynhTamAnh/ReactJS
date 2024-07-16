// import { userReducer5 } from './userReducer5';
export const userReducer6 = (
  state: string = "Rikkei Academy",
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "CHANGE_WORD":
      return "RikkeiSoft";
    default:
      return state;
    // change code
  }
};
