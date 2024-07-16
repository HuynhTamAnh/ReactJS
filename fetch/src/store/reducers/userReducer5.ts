export const userReducer5 = (
  state: number[] = [],
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "ADD_RANDOM":
      return [...state, action.payload];
    default:
      return state;
  }
};
