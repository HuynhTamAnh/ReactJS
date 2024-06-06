import "bootstrap/dist/css/bootstrap.min.css";

// import ListStudent from "./components/ListStudent";
import { Component } from "react";
// import BT3 from "./components/SS28/BT3";
import BT5 from "./components/SS28/BT5";

export interface IStudent {
  id: number;
  name: string;
  dob: string;
  address: string;
  phone: number;
  sex: boolean;
}

type StateType = {
  data: IStudent[];
};
class App extends Component<{}, StateType> {
  constructor(props: StateType) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "tâm anh",
          dob: "11/11/1111",
          address: "11 ggggg",
          phone: 28828822,
          sex: true,
        },
        {
          id: 2,
          name: "ai đó",
          dob: "22/22/2222",
          address: "22 hhhhh",
          phone: 874125852,
          sex: false,
        },
      ],
    };
  }

  handleDelete(id: number) {
    let afterDeleteList = this.state.data.filter((item) => item.id != id);
    this.setState({
      ...this.state,
      data: afterDeleteList,
    });
  }
  render() {
    return (
      <div className="container">
        {/* <ListStudent data={this.state.data} handleDelete={this.handleDelete} /> */}
        {/* <BT3 /> */}
        <BT5 />
      </div>
    );
  }
}
export default App;
