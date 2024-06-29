const Home: React.FC = () => {
  return (
    <section className="flex h-full w-full flex-col items-start justify-center mx-auto">
      <div>
        <h1 className="mb-[30px] ml-[4px] text-secondary font-normal leading-[1.1] font-mono">Hi, my name is</h1>
      </div>
      <div>
        <h2 className="m-0 mb-[10px] ml-[4px] text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] text-textBase">Felix Zhu.</h2>
      </div>
      <div>
        <h3 className="text-[clamp(40px,8vw,80px)] font-semibold leading-[0.9] text-textAccent">Software Developer.</h3>
      </div>
      <div>
        <p className="mt-[30px] ml-[4px] text-textAccent max-w-lg">
          Welcome to my personal website! Here you can learn more about me. Feel free to explore my projects, skills, and contact information.
        </p>
      </div>
      <div>
        <button className="rounded border border-secondary px-4 py-3 text-secondary mt-[50px] font-mono">
        Learn More
        </button>
      </div>
    </section>
  )
}

export default Home
// <section
//   id="home"
//   ref={ref}
//   className="pg-style items-center justify-center "
// >
//   <div className="flex flex-col items-center text-center">
//     <h2>Felix Zhu</h2>
//     <h2>Software Developer</h2>
//     <p className="w-2/3">
//       Welcome to my personal website! Here you can learn more about me. Feel
//       free to explore my projects, skills, and contact information.
//     </p>
//     <button className="w-[150px] rounded-2xl bg-textBase p-3">
//       <span className="text-primary">Learn More</span>
//     </button>
//   </div>
// </section>
