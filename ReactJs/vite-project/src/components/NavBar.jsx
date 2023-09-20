import React from "react";
import logo from "../img/react-icon-small.png"
import "../index.css"

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" className="nav--logo-img" />
      <h3 className="nav--logo-text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}