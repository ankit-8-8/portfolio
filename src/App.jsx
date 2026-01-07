import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Home from "./components/Home"
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer"
import { DNA } from 'react-loader-spinner'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // AOS.init({ duration: 800 })

    const start = Date.now()
    let hideTimeout = null
    let fallbackTimeout = null

    const hide = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, 1000 - elapsed) // ensure at least 1s
      hideTimeout = setTimeout(() => setLoading(false), remaining)
    }

    // If page already loaded, ensure loader stays at least 1s
    if (document.readyState === 'complete') {
      hide()
      return () => {
        if (hideTimeout) clearTimeout(hideTimeout)
      }
    }

    window.addEventListener('load', hide)
    // safety fallback: try to hide after 1.5s (will still respect 1s min)
    fallbackTimeout = setTimeout(hide, 8000)

    return () => {
      window.removeEventListener('load', hide)
      if (hideTimeout) clearTimeout(hideTimeout)
      if (fallbackTimeout) clearTimeout(fallbackTimeout)
    }
  }, [])

  return (
    <>
      {loading ? (
        <div style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.85)',
          zIndex: 9999
        }}>
          <DNA
            visible={true}
            height="170"
            width="170"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            dnaColorTwo="rgba(123, 30, 30, 0.8)"
            dnaColorOne="gray"
            // dnaColorTwo="grey"
          />
        </div>
      )
        :

        <div className="container-fluid position-relative pb-5">
          <Header />
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>}
    </>
  )
}

export default App
