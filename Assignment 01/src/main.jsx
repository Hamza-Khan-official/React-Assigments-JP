// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { createRoot } from "react-dom/client";
import React from "react";

let div_ = document.getElementById("root");
console.log(div_);

let Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )

}

let First_Heading = () => {
  return (
    <div>
      <h1>React</h1>
    </div>
  )
}

let Paragragh = () => {
  return (
    <div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro consequuntur iste earum qui, nobis sapiente. Asperiores, aliquam qui! Perspiciatis eos iste culpa itaque minima asperiores temporibus ab, facere placeat nulla.</p>
    </div>
  )
}

let Image = () => {
  return(
  <div>
    <img src="/vite.svg" alt="" />
  </div>
  )
}

let Footer_2 = () => {
  return(
    <div>
      <p>React Foter</p>
    </div>
  )
}


createRoot(div_).render(
  <div>
    <Header />
    <First_Heading />
    <Paragragh />
    <Image />
    <Footer_2 />

  </div>
)
