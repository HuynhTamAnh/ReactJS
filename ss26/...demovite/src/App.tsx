import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./components/css/table.css";
import Table from "./components/Table";

function App() {
  //2 way binding: data(model)->view
  //dữ liệu được lưu trữ trong component->view
  //dữ liệu ở form-> component để lưu trữ
  return (
    <>
      <Table />
    </>
  );
}

export default App;
