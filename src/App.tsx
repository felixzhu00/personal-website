import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeToggleButton from './components/utils/ThemeToggleButton'
import ScrollToTop from './components/utils/ScrollToTop'
import Footer from './components/Footer'
import FadeInSection from './components/utils/FadeInSection'
const App = () => {
  // useEffect(() => {
  //   const applyTheme = () => {
  //     // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     //   document.documentElement.classList.add('dark')
  //     // } else {
  //     //   document.documentElement.classList.remove('dark')
  //     // }

  //     document.documentElement.classList.add('dark')
  //   }

  //   applyTheme()
  // }, [])

  return (
    <div className="text-text-950">
      <Navigation />
      <Home />
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />
      {/* <ThemeToggleButton /> */}
      <ScrollToTop />
    </div>
  )
}
export default App
