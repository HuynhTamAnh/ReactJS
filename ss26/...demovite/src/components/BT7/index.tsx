import React, { Component } from "react";
import "./BT7.css";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

export default class BT7 extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="body">
          <div className="menu d-flex flex-center">
            <Menu />
          </div>
          <div className="content d-flex flex-center">
            <Main />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
