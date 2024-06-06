import React, { Component } from "react";
type StateType = {
  name: string;
  address: string;
  date: string;
};
export default class Form extends Component<{}, StateType> {
  constructor(props: StateType) {
    super(props);
    //khai báo thêm các thuộc tính khác
    this.state = {
      name: "",
      address: "",
      date: "",
    };
    this.onchangeInputName = this.onchangeInputName.bind(this);
  }
  onchangeInputName(e: React.ChangeEvent<HTMLInputElement>) {
    //lấy giá trị ô input
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <form action="">
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="">Name</label>
                </th>
                <td>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => {
                      this.onchangeInputName(e);
                    }}
                    value={this.state.name}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="">Address</label>
                </th>
                <td>
                  <input
                    type="text"
                    name="address"
                    onChange={(e) => {
                      this.onchangeInputName(e);
                    }}
                    value={this.state.address}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="">Date</label>
                </th>
                <td>
                  <input
                    type="date"
                    name="date"
                    onChange={(e) => {
                      this.onchangeInputName(e);
                    }}
                    value={this.state.date}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
