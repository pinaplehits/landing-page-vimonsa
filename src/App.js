import React from "react"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Example from "./components/Example"

export default function App() {
  return (
    <>
      <Navbar />
      <Example />
      <Header />
      <Features />
      <Contact />
      <Example />
    </>
  )
}
