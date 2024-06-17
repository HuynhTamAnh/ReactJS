import React, { useEffect, useState } from "react";

const Mycomp = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>();
  const [gender, setGender] = useState("true");

  //useEffect: can thiệp vòng đời của component
  //có 3 cách dùng
  useEffect(() => {
    //không có phụ thuộc: tự gọi khi component được mount hoặc sau mỗi lần rerender
    console.log("useEffect không có dependency");
    //return trong useEffect là 1 hàm dọn dẹp
    return () => {
      console.log("dọn dẹp rác trước khi component được unmount");
    };
  });
  //   useEffect(() => {
  //     //có 1 phụ thuộc là mảng rỗng:được gọi 1 lần duy nhất khi component được mount
  //     console.log("useEffect có phụ thuộc là 1 mảng rỗng");
  //   }, []);
  useEffect(() => {
    //có 2 phụ thuộc là name và age: được gọi sau khi component được mount hoặc sau khi component được update
    console.log("useEffect có phụ thuộc là 1 mảng không rỗng");
  }, [name, age]);
  return (
    <div>
      <p>Name:{name}</p>
      <p>age:{age}</p>
      <p>gender:{gender}</p>

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên..."
        />
        <br />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Nhập tuổi..."
        />
        <br />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>-Giới tính-</option>
          <option value="true">Nam</option>
          <option value="false">Nữ</option>
        </select>
      </form>
    </div>
  );
};

export default Mycomp;
