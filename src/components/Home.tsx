const Home: React.FC = () => {
  return (
    <section className="section min-h-[100vh] flex w-full flex-col items-start justify-center mx-auto">
        <h1 className="mb-[30px] ml-[8px] text-secondary font-normal leading-[1.1] font-mono">Hi, my name is</h1>
        <h2 className="m-0 mb-[10px] ml-[4px] text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] text-textBase">Felix Zhu.</h2>
        <h3 className="text-[clamp(40px,8vw,80px)] font-semibold leading-[0.9] text-textAccent">Software Developer.</h3>
        <p className="mt-[30px] ml-[4px] text-textAccent max-w-lg">
          Welcome to my personal website! Here you can learn more about me. Feel free to explore my projects, skills, and contact information.
        </p>
        <button className="rounded border border-secondary px-4 py-3 text-secondary mt-[50px] font-mono">
        Learn More
        </button>
    </section>
  )
}

export default Home
