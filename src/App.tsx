import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App: React.FC = () => (
  <>
    <Navigation />
    <main className="h-full w-full px-[10vw]">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </>
)

export default App
