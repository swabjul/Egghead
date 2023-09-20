const rootElement = document.querySelector("#root")
const element = <>
  <h1>Fake Restaurant</h1>
  <p>The best restaurant in town</p>
  <ul>
    <li>Dine with pleasure</li>
    <li>Drink with satisfaction</li>
  </ul>
</>

ReactDOM.render(element, rootElement)









// Create a User Interface with Vanilla JavaScript and DOM
// const rootElement = document.querySelector("#root")

// const element = document.createElement("h1")
// element.textContent = "This is H1 heading"
// element.className = "heading"

// rootElement.append(element)

// =========================

// Create a User Interface with React's createElement API
// const rootElement = document.querySelector("#root")

// const element = React.createElement("h1", {
//   children: React.createElement("span", null , "Hello", " World!!!"),
//   className: "container"
// })

// ReactDOM.render(element, rootElement)

// =========================

// Create a User Interface with JSX using Babel Compiler
// const rootElement = document.querySelector("#root")
// const element = <h1 className="heading-01">This Heading is rendered using JSX</h1>
// ReactDOM.render(element, rootElement)


// =========================
// Using JSX effectively with React

// const rootElement = document.querySelector("#root")
// const children = "This is h1 heading"
// const className = "heading-01"
// const props = {children, className}
// const element = <h1 id="top-heading" {...props} className="heading-value"/>


// ReactDOM.render(element, rootElement)

//Render two elements side-by-side with React Fragments
// Using React API
// const rootElement = document.querySelector("#root")
// const helloElement = React.createElement("span", null, "Hello")
// const worldElement = React.createElement("span", null, " World!")
// const element = React.createElement(React.Fragment, null , helloElement, worldElement)
// ReactDOM.render(element,rootElement)

// const rootElement = document.querySelector("#root")

// const element = (
//   // old syntax
//   // <React.Fragment>
//   //   <span>Hello</span> <span>World!!!</span>
//   // </React.Fragment>

//   // new syntax
//   <>
//     <span>Hello!!</span> <span>World!!!!!</span>
//   </>
// )
// ReactDOM.render(element, rootElement)


// =========================
//Create a Simple Reusable React Component
// const rootElement = document.querySelector("#root")
// const Message = props => <div className="message">{props.msg}</div>

// const element = (
//   // <div className="container">
//   //   {message({msg: "Hello World"})}
//   //   {message({msg: "Bye World"})}
//   // </div>

//   // Ergonomic way to code
//   <div className="container">
//     <Message msg="Hello World"/>
//     <Message msg="Bye World"/>
//   </div>
// )


// ReactDOM.render(element, rootElement)



// TESTING OTHER TUTORIALS