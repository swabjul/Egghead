import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import Footer from "./components/Footer"
import data from "./data.js"

export default function App() {

  const cardList = data.map(items =>  <Card {...items} />)

  return (
    <>
      <Nav / >
      <div className="card-container">
      {cardList}
      </div>
      <Footer / >
    </>
  )
}