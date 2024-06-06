import { Component } from "react";
import Children from "./Children";

export default class Parent extends Component {
  //sử dụng props để luồng dữ liệu từ cha xuống con
  //luỗng dữ liệu từ con lên cha: callback function
  render() {
    // let name: "ai đó vậy";
    // let id: 1;
    // let age = 111;
    // const callback=()=>{
    //     console.log("call back")
    // }
    // const fun=(callback:Function)=>{
    //     callback();
    // }
    const callBack = (keyword: string) => {
      console.log(keyword);
    };
    // let ketword
    return (
      <div>
        <Children
          callBack={callBack}
          print={() => console.log("hhhh")}
          id={0}
          name="dd"
          age={1}
        />
      </div>
    );
  }
}
