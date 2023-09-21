import React, {useState} from "react"



export default function Test() {

  // const [count, setCount] = useState(0)

  // function addCount() {
  //   setCount(prevCount => prevCount + 1)
  // }

  // function subtractCount() {
  //   setCount(prevCount => prevCount - 1)
  // }



  // const [isGoingOut, setIsGoingOut] = useState(true);

  // function toggleClick() {
  //   setIsGoingOut(prevState => !prevState)
  // }


  const [thingsArray, setThingArray] =  useState(["Thing 1", "Thing 2"])


 
  function addItems() {
    setThingArray(prevArray => {
      return [...prevArray, `Thing ${prevArray.length + 1}`]

    })

  }



  const thingsElements = thingsArray.map(items => <p key={items}>{items}</p>)

  




  return (
    // <>
    //   <div className="state">
    //     <h1>Do i feel like going out?</h1>
    //     <div className="state--value" onClick={toggleClick}>
    //       <h1>{isGoingOut ? "Yes" : "No"}</h1>
    //       {/* <div className="state--minus" onClick={subtractCount} >-</div>
    //       <div className="state--add" onClick={addCount}>+</div> */}
    //     </div>
    //   </div>
    // </>






    <div className="test--container">
      <button onClick={addItems}>Add item</button>
      {thingsElements}
    </div>

  )
}