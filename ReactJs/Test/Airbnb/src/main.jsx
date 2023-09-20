import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./css/style.css"

// const images = require.context('./img', true);
// const imageList = images.keys().map(image => images(image));






const rootElement = ReactDOM.createRoot(document.querySelector("#root"))
rootElement.render(
  <App />
)








// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
