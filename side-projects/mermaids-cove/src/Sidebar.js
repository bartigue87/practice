import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Close from "../assets/X.png";

export default function Sidebar(props) {
  const [sidebarClass, setSidebarClass] = useState(props.sidebar);

  const closeHandler = (e) => {
    e.preventDefault();
    setSidebarClass("sidebar close");
    setTimeout(() => {
      props.close();
    }, 1000);
  };
  return (
    <>
      <div className={sidebarClass}>
        <div className="x-container">
          <button onClick={closeHandler}>
            {/* <img className="x" src={Close} /> */}
          </button>
        </div>
        <ul className="navbar-container">
          <li className="home">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </li>

          <li className="food-truck-menu">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/truck-menu"
            >
              Food Truck Menu
            </Link>
          </li>
          <li className="catering">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/catering"
            >
              Catering
            </Link>
          </li>
          <li className="our-stor">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/ourstory"
            >
              Our Story
            </Link>
          </li>
          <li className="schedule">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/schedule"
            >
              Schedule
            </Link>
          </li>
          <li className="contact-us">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact-us"
            >
              Contact Us
            </Link>
          </li>
          <li className="retail-products">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/find-us-in-stores"
            >
              Retail Products
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
