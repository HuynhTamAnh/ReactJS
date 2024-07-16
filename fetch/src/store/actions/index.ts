//action tăng giá trị thêm n đơn vị
export const act_increasement_n = (n: number) => ({
  type: "INCREASEMENT_N",
  payload: n,
});
export const act_decreasememt_n = (n: number) => ({
  type: "DECREASEMENT_N",
  payload: n,
});
export const act_power_up_n = (n: number) => ({
  type: " POWER_UP_N",
  payload: n,
});
export const act_random_number = (n: number) => ({
  type: "ADD_RANDOM",
  payload: n,
});
export const act_change_word = () => ({
  type: "CHANGE_WORD",
});
