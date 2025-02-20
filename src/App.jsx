import { useState } from 'react'
import './styles/globals.css'

// Components
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <ScrollReveal>
        <div className="app">
          <Hero />
          <Features />
          <About />
          <Team />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </ScrollReveal>
    </div>
  )
}

export default App
