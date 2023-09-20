import React from "react"
import profile from "../img/profile.jpg"


export default function Info() {
  return (
    <div className="info-container">
      <figure>
        <img src={profile} alt="profile" />
      </figure>
      <div className="info--inner">
        <h1>
          <span className="info--name">Zouave Jul Bulawan</span>
          <span className="info--position">Front End Developer</span>
          <span className="info--email">zj.bulawan@gmail.com</span>
        </h1>
        <div className="info--contact_buttons">
          <button>Email</button>
          <button>LinkedIn</button>
        </div>
      </div>
    </div>
  )
}