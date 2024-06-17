import "bootstrap/dist/css/bootstrap.min.css";

// import ListStudent from "./components/ListStudent";
import { Component } from "react";
// import Calculator from "./components/SS29/BT12";
// import BT12 from "./components/SS29/BT12";
// import Exercise3 from "./components/SS29/BT3/Exercise3";
// import Exercise4 from "./components/SS29/BT4/Exercise4";
// import Exercise5 from "./components/SS29/BT5+6/Exercise5";
// import BT7 from "./components/SS29/BT7";
// import BT3 from "./components/SS28/BT3";
// import BT5 from "./components/SS28/BT5";
// import Index from "./components/SS29/BT1/Index";
// import Exercise02 from "./components/SS29/BT2/Exercise02";
// import Exercise2 from "./components/SS29/BT2/Exercise2";
// import Exercise3 from "./components/SS29/BT3/Exercise3";
// import Exercise4 from "./components/SS29/BT4/Exercise4";
// import index from "./components/Lifecycle/BT1/index";
// import BT1 from "./components/SS35/BT2/index";
import BT2 from "./components/SS35/BT2";
import TodoList from "./components/SS32-33-34/BT1/TodoList";
import BT3 from "./components/SS35/BT3";
import BT4 from "./components/SS35/BT4";
import BT5 from "./components/SS35/BT5";
import BT6 from "./components/SS35/BT6";
import BT7 from "./components/SS35/BT7";
import BT8 from "./components/SS35/BT8";
import BT10 from "./components/SS35/BT10";
import BT11 from "./components/SS35/BT11-12";
import Mycomp from "./components/SS35/ontap/Mycomp";
import TodoManager from "./components/SS35/ontap/baitaptonghop/todoManager";
// import BT3 from "./components/Lifecycle/BT3";
// import BT9 from "./components/Lifecycle/BT9";
// import BT4 from "./components/Lifecycle/BT4";
// import EmailForm from "./components/SS31/BT1/EmailForm";
// import Modal from "./components/SS29/BT12/Modal";

// import { Modal } from "react-bootstrap";

// export interface IStudent {
//   id: number;
//   name: string;
//   dob: string;
//   address: string;
//   phone: number;
//   sex: boolean;
// }

// type StateType = {
//   data: IStudent[];
// };
class App extends Component {
  // constructor(props: StateType) {
  //   super(props);
  //   this.state = {
  //     data: [
  //       {
  //         id: 1,
  //         name: "tâm anh",
  //         dob: "11/11/1111",
  //         address: "11 ggggg",
  //         phone: 28828822,
  //         sex: true,
  //       },
  //       {
  //         id: 2,
  //         name: "ai đó",
  //         dob: "22/22/2222",
  //         address: "22 hhhhh",
  //         phone: 874125852,
  //         sex: false,
  //       },
  //     ],
  //   };
  // }

  // handleDelete(id: number) {
  //   let afterDeleteList = this.state.data.filter((item) => item.id != id);
  //   this.setState({
  //     ...this.state,
  //     data: afterDeleteList,
  //   });
  // }
  render() {
    return (
      <div>
        {/* <ListStudent data={this.state.data} handleDelete={this.handleDelete} /> */}
        {/* <BT3 /> */}
        {/* <BT5 /> */}
        {/* <Index /> */}
        {/* <Exercise3 /> */}
        {/* <Exercise4 /> */}
        {/* <Modal /> */}
        {/* <BT12 /> */}
        {/* <Exercise4 /> */}
        {/* <Exercise5 /> */}
        {/* <BT7 /> */}
        {/* <BT4 /> */}
        {/* <BT9 /> */}
        {/* <EmailForm /> */}
        {/* <BT1 /> */}
        {/* <BT2 /> */}
        {/* <TodoList /> */}
        {/* <BT3 /> */}
        {/* <BT6 /> */}
        {/* <BT7 /> */}
        {/* <BT8 /> */}
        {/* <BT10 /> */}
        {/* <BT11 /> */}
        {/* <Mycomp /> */}
        <TodoManager />
      </div>
    );
  }
}
export default App;
