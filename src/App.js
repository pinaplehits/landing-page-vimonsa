import React from "react"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Example from "./components/Example"
import Footer from "./components/Footer"
import About from "./components/About"

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Example />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
