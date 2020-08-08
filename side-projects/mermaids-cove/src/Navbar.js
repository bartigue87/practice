import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
// import Hamburger from "../assets/hamburger.png";
// import Desktoplogo from "../assets/desktoplogo.png";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  const sidebarCloseHandler = () => {
    setSidebarOpen(false);
  };

  let sidebar;
  if (sidebarOpen) {
    sidebar = <Sidebar close={sidebarCloseHandler} sidebar={"sidebar"} />;
  }
  return (
    <>
      {sidebar}
      <header class="header">
        <div class="logo-container">
          {/* <img class="navbar-logo" src={Desktoplogo} /> */}
        </div>

        {/* <img onClick={openHandler} class="hamburger" src={Hamburger} /> */}
      </header>
      <nav class="navbar">
        <ul class="nav">
          <li class="nav-img">{/* <img src={Desktoplogo} /> */}</li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-animals">My Animals</Link>
          </li>
          <li>
            <Link to="/records-book">Records Book</Link>
          </li>
          <li>
            <Link to="/cage-building">Cage Building</Link>
          </li>
          {/* <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/find-us-in-stores">Find Us in Stores</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
