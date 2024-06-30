import React from 'react'
import { SectionRefsProvider } from './components/util/SectionRefsContext'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToSection from './components/util/ScrollToSection'

const App: React.FC =
  () => (
    <>
      <Navigation />
      <main className="px-[10vw] w-full h-full">
        <Home />
        <About />
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
    </>
  )

export default App
