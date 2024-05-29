enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const outp = <T>(obj: T): void => {
  for (const key in obj) {
    // isNaN(Number(key)) kiểm tra nếu key không phải là số
    if (!isNaN(Number(key))) {
      continue;
    }
    console.log(key);
  }
};

outp(WeekDays);
