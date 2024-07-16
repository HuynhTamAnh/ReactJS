export const userReducer4 = (
  state: number = 0,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "INCREASEMENT_N":
      state += action.payload;
      return state;
    case "DECREASEMENT_N":
      state -= action.payload;
      return state;
    default:
      return state;
  }
};
