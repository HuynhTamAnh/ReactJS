import "bootstrap/dist/css/bootstrap.min.css";

// import ListStudent from "./components/ListStudent";
import { Component } from "react";
import BT5 from "./components/SS36/Luyện tập/BT5";
import BT6 from "./components/SS36/Luyện tập/BT6";

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
        {/* <TodoManager /> */}
        {/* <Inclass /> */}
        {/* <List /> */}
        {/* <Timer /> */}
        {/* <BT1 /> */}
        {/* <BT4 /> */}
        {/* <BT5 /> */}
        <BT6 />
      </div>
    );
  }
}
export default App;
