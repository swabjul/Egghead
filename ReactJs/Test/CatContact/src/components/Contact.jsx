import React from "react"

export default function Contact({img, name, contact, email}) {
  return (
    <>
      <div className="contact-card">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div class="info-tel">
          <img src="/img/phone-icon.png" alt="" />
          <span>{contact}</span>
        </div>
        <div class="info-email">
          <img src="/img/mail-icon.png" alt="" />
          <span>{email}</span>
        </div>
      </div>
    </>
  )
}