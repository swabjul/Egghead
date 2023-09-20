import React from "react"
import "./App.css"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="contact-card-container">
      <Contact 
        img="/img/mr-whiskerson.png"
        name="Mr. Whislerson"
        contact="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img="/img/fluffykins.png"
        name="Fluffykins"
        contact="(212) 555-2345"
        email="fluff@me.com"
      />
       <Contact 
        img="/img/felix.png"
        name="Felix"
        contact="(212) 555-4567"
        email="thecat@hotmail.com"
      />
       <Contact 
        img="/img/pumpkin.png"
        name="Pumpkin"
        contact="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  )
}






// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
