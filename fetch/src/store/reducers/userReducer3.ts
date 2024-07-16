import { IUser } from "../../interface";
// import { userReducer } from "./userReducer";
export const userReducer3 = (
  state: IUser[] | null = [
    {
      id: 1,
      name: "a",

      price: 1,
      quantity: 1,
    },
    {
      id: 2,
      name: "b",
      price: 1,
      quantity: 1,
    },
  ],
  action: { type: string; payload: IUser }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
