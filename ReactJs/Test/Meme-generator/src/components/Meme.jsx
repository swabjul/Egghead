import React, {useState} from "react"
import memesData from "../memesData"


export default function Meme() {
  const [memeImage,setMemeImage] = useState("")




  // const [memeTopText, setMemeTopText] = useState("Test")
  // const [memeBottomText, setMemeBottomText] = useState("Test")
  // const topTextElem = document.querySelector("[data-text='top']").value || "test"
  // const bottomTextElem = document.querySelector("[data-text='bottom']").value || "test"

  // setMemeTopText(topTextElem)
  // setMemeBottomText(bottomTextElem)





  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }







  return (
    <>
    <div className="meme--form">
      <input className="meme--input" type="text" placeholder="Top Text" data-text="top" />
      <input className="meme--input" type="text" placeholder="Bottom Text" data-text="bottom"/>
      <button className="meme--button" onClick={getMemeImage}>Get a new meme Image 🖼️</button>
    </div>
    <figure className="meme--image">
      <img src={memeImage} />
      <p className="meme--top_text"><span>Test</span></p>
      <p className="meme--bottom_text"><span>test</span></p>
    </figure>
    
    </>

  )

}