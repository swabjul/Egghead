import React, {useState} from "react"
import memesData from "../memesData"


export default function Meme() {

  const meme = {
    topText: "aaaaa",
    bottomText: "Test",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  }

  const [allMemeImages,SetAllMemeImages] = useState(meme)



  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)

    const topInputElement = document.querySelector("[data-text=top]")
    const bottomInputElement = document.querySelector("[data-text=bottom]")

    SetAllMemeImages(prevMeme => ({
      ...prevMeme,
      topText: topInputElement.value,
      bottomText: bottomInputElement.value,
      randomImage: memesArray[randomNumber].url


    }))


    // const memesArray = memesData.data.memes
    // const randomNumber = Math.floor(Math.random() * memesArray.length)
    // allMemeImages(memesArray[randomNumber].url)
  }

  return (
    <>
    <div className="meme--form">
      <input className="meme--input" type="text" placeholder="Top Text" data-text="top" />
      <input className="meme--input" type="text" placeholder="Bottom Text" data-text="bottom"/>
      <button className="meme--button" onClick={getMemeImage}>Get a new meme Image 🖼️</button>
    </div>
    <figure className="meme--image">
      <img src={allMemeImages.randomImage} />
      <p className="meme--top_text"><span>{allMemeImages.topText}</span></p>
      <p className="meme--bottom_text"><span>{allMemeImages.bottomText}</span></p>
    </figure>
    
    </>

  )

}