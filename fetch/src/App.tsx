import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getAllStudents } from "./store/slice/studentSlice";
import Student from "./component/layout/Student"; // Ensure the path is correct

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  return (
    <div>
      <Student />
    </div>
  );
}

export default App;
