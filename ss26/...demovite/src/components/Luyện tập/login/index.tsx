import React from "react";
import "./login.css";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import {
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const Login = () => {
  return (
    <div className="container-fluid">
      <header>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery- OFF 50%!{" "}
          <b>
            <a href="">ShopNow</a>
          </b>
        </p>
        <select>
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </header>

      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="#">Exclusive</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="#action3">About</Nav.Link>
            <Nav.Link href="#action4">Sign Up</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What are you looking for?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <hr />
      <div className="body-container">
        <div className="left">
          <img
            src="https://i.pinimg.com/564x/2d/92/ab/2d92ab9c98e1afa8177b85e59c330e22.jpg"
            alt="shopping"
          />
        </div>
        <div className="right">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email or Phone Number"
                className="custom-input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                className="custom-input"
              />
            </Form.Group>
            <div className="form-buttons">
              <Button variant="danger" type="submit">
                Log In
              </Button>
              <Button id="forget" variant="link">
                Forget Password?
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <footer>
        <div className="footer-left">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 15% off your first order</p>
          <div className="input-container">
            <input type="text" placeholder="Enter your email" />
            <Button variant="danger">&#62;</Button>
          </div>
        </div>
        <div className="footer-middle">
          <h3>Support</h3>
          <p>
            111 Bijy srarak,Drkuta,
            <br />
            Dhi Qar, singpadeesh
            <br />
            exclusive@gmail.com
            <br />
            +8088-88888-8999
          </p>
        </div>
        <div className="footer-right">
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="footer-quick-link">
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="footer-app-download">
          <div className="app-download">
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className="app-icons">
              <div className="app-left">
                <img
                  id="trai"
                  src="https://i.pinimg.com/736x/a9/33/8d/a9338dfa88153a38e532bdaf81623dc6.jpg"
                />
              </div>
              <div className="app-right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2000px-Download_on_the_App_Store_Badge.svg.png"
                  alt="App Store"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2000px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                />
              </div>
            </div>
            <div className="apps">
              <CiFacebook />
              <CiTwitter />
              <CiInstagram />
              <CiLinkedin />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
