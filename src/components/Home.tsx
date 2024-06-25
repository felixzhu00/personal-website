import { forwardRef } from 'react'

interface HomeProps {}

const Home = forwardRef<HTMLElement, HomeProps>((props, ref) => (
  <section
    id="home"
    ref={ref}
    className="section text-textBase ml-[20%] flex h-full w-4/5 items-center justify-center bg-primary text-xl font-semibold"
  >
    <div className="flex flex-col items-center text-center">
      <h2>Felix Zhu</h2>
      <h2>Software Developer</h2>
      <p className='w-2/3'>
        Welcome to my personal website! Here you can learn more about me. Feel
        free to explore my projects, skills, and contact information.
      </p>
      <button className="w-[150px] bg-textBase p-3 rounded-2xl"> <span className='text-primary'>Learn More</span></button>
    </div>
  </section>
))

export default Home
