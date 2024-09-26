import FadeInSection from './utils/FadeInSection'
import HoverButton from './utils/HoverButton'

import React from 'react'

function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string): void => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <section id="home" className="section-spacing flex min-h-[100vh] w-full flex-col items-start justify-center">
      <div>
        <FadeInSection delay={200}>
          <p className="paragraph mb-4">Hi, my name is</p>
        </FadeInSection>
        <FadeInSection delay={400}>
          <p className="landing-heading mb-2">Felix Zhu.</p>
        </FadeInSection>
        <FadeInSection delay={600}>
          <p className="landing-heading">Software Engineer.</p>
        </FadeInSection>
        <FadeInSection delay={800}>
          <p className="paragraph mb-4 mt-6 max-w-lg">
            Welcome to my personal website! Here you can learn more about me. Feel free to explore my projects, skills, and contact information.
          </p>
        </FadeInSection>

        <FadeInSection delay={1000}>
          <HoverButton innerClass="px-4 py-3" outerClass="mt-6">
            <a href="#about" onClick={(e) => handleScroll(e, '#about')}>
              Learn More
            </a>
          </HoverButton>
        </FadeInSection>
      </div>
    </section>
  )
}

export default Home
