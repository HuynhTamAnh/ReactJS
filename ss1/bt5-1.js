let account = [
  {
    userName: "Nguyen Van A",
    password: "abcd",
  },
  {
    userName: "Nguyen Van B",
    password: "c def",
  },
  {
    userName: "Nguyen Van C",
    password: "cdef",
  },
];

let checkAccount = account.filter((account) => !account.password.includes(" "));

if (checkAccount.length > 0) {
  console.log("Tài khoản không hợp lệ tại vị trí:");
  checkAccount.forEach((acc, index) => {
    console.log(index);
  });
} else {
  console.log("Tất cả các tài khoản đều hợp lệ.");
}
