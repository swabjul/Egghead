import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import Test from "./components/Test"
import ComplexStateObjects from "./components/ComplexStateObjects"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Meme />
      </main>
      {/* <Test / > */}
      {/* <ComplexStateObjects /> */}
    </>
  )
}