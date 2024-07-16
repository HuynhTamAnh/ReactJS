import { combineReducers } from "redux";
import { IUser } from "../../interface";

export const reducer = (
  state: null,
  action: { type: string; payload: IUser }
) => {
  switch (action) {
    default:
      return state;
  }
};
export const root = combineReducers({ count: reducer });
