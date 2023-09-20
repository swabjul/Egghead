import React from "react"
import logo from "./img/react-logo.png"

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="header-logo">
          <img className="img-logo" src={logo}/>
          <span>ReactsFacts</span>
        </div>
        <div className="header-title">
          <span>React Course - Project 1</span>
        </div>
      </header>
    </>
  )
}