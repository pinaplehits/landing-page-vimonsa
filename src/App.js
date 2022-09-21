import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Services from "./components/Services"
import Footer from "./components/Footer"
import About from "./components/About"
import SmoothScroll from "smooth-scroll"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  updateURL: false,
  offset: 65
})

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
