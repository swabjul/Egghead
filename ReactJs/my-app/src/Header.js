import React from "react"

export default function Header() {
  return (
    <header>
      <nav className="header-nav">
        <img className="logo" src="/img/react-logo.png" width="40"/>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}