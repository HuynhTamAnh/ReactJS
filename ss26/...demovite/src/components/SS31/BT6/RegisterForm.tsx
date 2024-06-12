import React, { Component } from "react";

interface User {
  userName: string;
  email: string;
  password: string;
  rePassword: string;
}

interface State {
  user: User;
}

class RegisterForm extends Component<{}, State> {
  state: State = {
    user: {
      userName: "",
      email: "",
      password: "",
      rePassword: "",
    },
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted user:", this.state.user);
  };

  render() {
    const { user } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Thêm mới tài khoản</h2>
        <div>
          <label>
            Họ và tên:
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Mật khẩu:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Nhập lại mật khẩu:
            <input
              type="password"
              name="rePassword"
              value={user.rePassword}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    );
  }
}

export default RegisterForm;
