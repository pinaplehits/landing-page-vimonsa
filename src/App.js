import React from "react"
import Navbar from "./components/Navbar"
import Example from "./components/Example"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Header from "./components/Header"

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Example /> */}
      <Header />
      <Features />
      <Contact />
    </>
  )
}
