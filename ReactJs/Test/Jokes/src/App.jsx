import React from "react"
import Joke from "./Joke"
import jokeData from "./jokeData"



export default function App() {
  const jokeElements = jokeData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
  }
)

  return (
    <>
      {jokeElements}
    </>

  )
}