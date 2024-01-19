/* eslint-disable no-unused-vars */
import React from "react"
import './App.css'
import NavBar from "./components/NavBar/navBar"
import Home from "./components/Home/home"
import Popular from "./components/Popular/popular"
import Offers from "./components/Offers/offers"
import About from "./components/About/about"
import Blog from "./components/Blog/blog"
import Fotter from "./components/Fotter/fotter"

function App() {

  return (
    <div>
     <NavBar/>
     <Home/>
     <Popular/>
     <Offers/>
     {/* <About/>
     <Blog/>
     <Fotter/> */}
    </div>
  )
}

export default App
