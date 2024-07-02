import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* header section start */}
        <div className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="logo" href="index.html">
                <img src="images/logo.png" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="repair.html">
                      Repair
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <div className="search_icon">
                    <a href="#">
                      <img src="images/search-icon.png" />
                    </a>
                  </div>
                </form>
              </div>
            </nav>
          </div>
          {/* banner section start */}
          <div className="banner_section layout_padding">
            <div
              id="main_slider"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h1 className="banner_taital">
                          Tablates And Phons Repair Service
                        </h1>
                        <p className="banner_text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                        </p>
                        <div className="btn_main">
                          <div className="read_bt">
                            <a href="#">Read More</a>
                          </div>
                          <div className="contact_bt active">
                            <a href="#">Contact US</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="image_1">
                          <img src="images/img-1.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h1 className="banner_taital">
                          Tablates And Phons Repair Service
                        </h1>
                        <p className="banner_text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                        </p>
                        <div className="btn_main">
                          <div className="read_bt">
                            <a href="#">Read More</a>
                          </div>
                          <div className="contact_bt active">
                            <a href="#">Contact US</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="image_1">
                          <img src="images/img-1.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h1 className="banner_taital">
                          Tablates And Phons Repair Service
                        </h1>
                        <p className="banner_text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                        </p>
                        <div className="btn_main">
                          <div className="read_bt">
                            <a href="#">Read More</a>
                          </div>
                          <div className="contact_bt active">
                            <a href="#">Contact US</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="image_1">
                          <img src="images/img-1.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#main_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="carousel-control-next"
                href="#main_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
          {/* banner section end */}
        </div>
        {/* header section end */}
        {/* about section start */}
        <div className="about_section layout_padding">
          <div className="container">
            <h1 className="about_taital">About Repair shop</h1>
            <p className="about_text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If
            </p>
            <div className="about_section_2">
              <div className="row">
                <div className="col-md-6">
                  <div className="image">
                    <img src="images/img-2.png" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image_2">
                    <img src="images/img-3.png" />
                  </div>
                </div>
              </div>
            </div>
            <p className="about_text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If
            </p>
            <div className="readmore_bt">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        {/* about section end */}
        {/*  blog section start */}
        <div className="blog_section layout_padding">
          <div className="container-fluid">
            <h1 className="blog_taital">What We Do</h1>
            <p className="blog_text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some{" "}
            </p>
            <div className="blog_section_2">
              <div className="row">
                <div className="col-md-6 padding_left_0">
                  <div className="image_4">
                    <img src="images/img-4.png" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="laptop_text">Mobiles Repair </h4>
                  <p className="ipsum_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure{" "}
                  </p>
                  <div className="read_bt_2">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="blog_section_3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog_taital_main">
                      <h4 className="laptop_text">Tablate Rapair</h4>
                      <p className="ipsum_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure{" "}
                      </p>
                      <div className="read_bt_2">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 padding_right_0">
                    <div className="image_5">
                      <img src="images/img-5.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog_section_2">
                <div className="row">
                  <div className="col-md-6 padding_left_0">
                    <div className="image_4">
                      <img src="images/img-6.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="laptop_text">Laptop And pc Repair</h4>
                    <p className="ipsum_text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure{" "}
                    </p>
                    <div className="read_bt_2">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  blog section end */}
        {/*  repair section start */}
        <div className="repair_section layout_padding">
          <div className="container">
            <h1 className="repair_taital">Who we are</h1>
            <p className="repair_text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If
            </p>
            <div className="image_7">
              <img src="images/img-7.png" />
            </div>
            <p className="about_text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If
            </p>
            <div className="readmore_bt">
              <a href="#">Get A Quote</a>
            </div>
          </div>
        </div>
        {/*  repair section end */}
        {/* contact section start */}
        <div className="contact_section layout_padding">
          <div className="container-fluid">
            <h1 className="contact_taital">Contact Us</h1>
            <p className="contact_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="contact_section_2">
              <div className="row">
                <div className="col-md-6 padding_left_0">
                  <div className="map_main">
                    <div className="map-responsive">
                      <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                        width={600}
                        height={550}
                        frameBorder={0}
                        style={{ border: 0, width: "100%" }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mail_section_1">
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Name"
                      name="text"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Email"
                      name="text"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Phone Number"
                      name="text"
                    />
                    <textarea
                      className="massage-bt"
                      placeholder="Massage"
                      rows={5}
                      id="comment"
                      name="Massage"
                      defaultValue={""}
                    />
                    <div className="send_bt">
                      <a href="#">SEND</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact section end */}
        {/* footer section start */}
        <div className="footer_section">
          <div className="container">
            <div className="footer_location_text">
              <ul>
                <li>
                  <img src="images/map-icon.png" />
                  <span className="padding_left_10">
                    <a href="#">Loram Ipusm hosting web</a>
                  </span>
                </li>
                <li>
                  <img src="images/call-icon.png" />
                  <span className="padding_left_10">
                    <a href="#">Call : +7586656566</a>
                  </span>
                </li>
                <li>
                  <img src="images/mail-icon.png" />
                  <span className="padding_left_10">
                    <a href="#">demo@gmail.com</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <h2 className="useful_text">Useful link </h2>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="repair.html">Service</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h2 className="useful_text">Repair</h2>
                <p className="lorem_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscinaliqua
                  Loreadipiscing{" "}
                </p>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h2 className="useful_text">social media</h2>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="images/fb-icon.png" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/twitter-icon.png" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/linkedin-icon.png" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/youtub-icon.png" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <h1 className="useful_text">Our Repair center</h1>
                <p className="footer_text">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscinaliquaLoreadipiscing{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end info section */}
        {/* footer section end */}
        {/* copyright section start */}
        <div className="copyright_section">
          <div className="container">
            <p className="copyright_text">
              2019 All Rights Reserved. Design by{" "}
              <a href="https://html.design">Free html Templates</a> Distributed
              By <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
