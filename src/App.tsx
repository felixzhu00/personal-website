import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FadeInSection from './components/util/FadeInSection'

const App = () => {
  return (
    <>
      <Navigation />
      <main className="h-full w-full px-[10vw]">
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
      </main>
    </>
  )
}
export default App
