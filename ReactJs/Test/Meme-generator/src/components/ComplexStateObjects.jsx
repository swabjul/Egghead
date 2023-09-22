import React from "react"

export default function ComplexStateObjects() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
})

function toggleFavorite() {
  setContact(prevState => {
    return {
      ...prevState,
      isFavorite: !prevState.isFavorite
    }
  })
}



  return (
    <main>
      <article className="card">
        <img src="/img/user.png" alt="" className="card--image"/>
        <div className="card--info">
          <img src={`/img/${contact.isFavorite ? "star-filled.png" : "star-empty.png"}`} alt="" className="card--favorite" onClick={toggleFavorite} />
          <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
          <p className="card--number">{contact.phone}</p>
          <p className="card--email">{contact.email}</p>
        </div>
      </article>
    </main>


  )
}