import React from "react"
import memesData from "../memesData"


export default function Meme() {

  let memeUrl

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    memeUrl = memesArray[randomNumber].url


    console.log(memeUrl)
  }







  return (
    <>
    <div className="meme--form">
      <input className="meme--input" type="text" placeholder="Shut up"/>
      <input className="meme--input" type="text" placeholder="and take my money"/>
      <button className="meme--button" onClick={getMemeImage}>Get a new meme Image 🖼️</button>
    </div>
    <figure>
      <img src={memeUrl} />
    </figure>
    
    </>

  )

}