import React from "react"



export default function Test() {

  const [count, setCount] = React.useState(0)

  function countMinus() {
    setCount(count - 1)
  }

  function countAdd() { 
    setCount(count + 1)
  }

  return (
    <>
      <div className="state">
        <div className="state--value">
          <h1>{count}</h1>
          <div className="state--minus" onClick={countMinus} >-</div>
          <div className="state--add" onClick={countAdd}>+</div>
        </div>
      </div>
    </>






    // <div className="test--container">
    //   <button>Add item</button>
    //   <p>aaaaaaaaaaaaaaaaaa</p>
    //   <p>aaaaaaaaaaaaaaaaaa</p>
    //   <p>aaaaaaaaaaaaaaaaaa</p>
    //   <p>aaaaaaaaaaaaaaaaaa</p>
    //   <p>aaaaaaaaaaaaaaaaaa</p>
    //   <p>aaaaaaaaaaaaaaaaaa</p>
    // </div>

  )
}