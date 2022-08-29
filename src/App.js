import React from "react"
//import ReactDOM from "react-dom"
import About from "./components/About"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Interests from "./components/Interests"
import Skills from "./components/Skills"

export default function App() {
    return (
        <div className="page">
            <Info />
            <About />
            <Interests />
            <Skills />
            <Footer />
        </div>
    )
}

