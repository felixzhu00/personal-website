import React from 'react'
import { SectionRefsProvider } from './components/util/SectionRefsContext'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToSection from './components/util/ScrollToSection'

const App: React.FC = () => (
  <>
    <Navigation />
    <Home />
    <About />
    {/* <Skills /> */}
    {/* <Projects /> */}
    {/* <Contact /> */}
  </>
)

export default App
