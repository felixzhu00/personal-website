const Home: React.FC = () => {
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
    <section className="section mx-auto flex min-h-[100vh] w-full flex-col items-start justify-center">
      <h1 className="mb-[30px] ml-[8px] font-mono font-normal leading-[1.1] text-secondary">Hi, my name is</h1>
      <h2 className="m-0 mb-[10px] ml-[4px] text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] text-textBase">Felix Zhu.</h2>
      <h3 className="text-[clamp(40px,8vw,80px)] font-semibold leading-[0.9] text-textAccent">Software Developer.</h3>
      <p className="ml-[4px] mt-[30px] max-w-lg text-textAccent">
        Welcome to my personal website! Here you can learn more about me. Feel free to explore my projects, skills, and contact information.
      </p>
      <button className="mt-[50px] rounded border border-secondary px-4 py-3 font-mono text-secondary"><a href="#about" onClick={(e) => handleScroll(e, "#about")}>Learn More</a></button>
    </section>
  )
}

export default Home
