import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css";
import Header from "./Header"
import MainContent from "./MainContent";
import Footer from "./Footer";

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}


const rootElement = ReactDOM.createRoot(document.querySelector("#root"))
rootElement.render(<Page />)


// import React from 'react';
// import ReactDOM from 'react-dom/client';




// function TemporaryName() {
//   return (
//     <>
//       <img src="/img/react-logo.png" width="40" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k starts on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Power thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </>
//   )
// }




// const rootElement = ReactDOM.createRoot(document.querySelector("#root"))
// rootElement.render(<TemporaryName />)







// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
