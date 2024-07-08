import SectionHeader from './util/SectionHeader'
import profileImage from '../assets/profile.png'

const About = () => (
  <section id="about" className="section flex max-w-4xl flex-col justify-center">
    <SectionHeader number="01" title="About Me" />
    <div className="flex flex-col justify-between gap-[50px] sm:flex-row items-center">
      <div className="w-full text-[17px] text-textAccent">
        <p className="mb-[15px]">
          Hi, I'm Felix Zhu, a recent graduate with a Bachelor's degree in Computer Science from{' '}
          <span className="text-secondary">Stony Brook University</span>, where I developed a strong foundation in software development and
          technology. Passionate about creating efficient and innovative solutions, I am eager to leverage my academic background and hands-on
          experience to embark on a career in software development.
        </p>
        <p className="mb-[15px]">Here are a few technologies I’ve been focusing on:</p>
        <ul className="gap-[0px 10px] grid list-none grid-cols-2 overflow-hidden p-0">
          <li>
            <span className="mr-2 text-secondary">▹</span>Java
          </li>
          <li>
            <span className="mr-2 text-secondary">▹</span>Python
          </li>
          <li>
            <span className="mr-2 text-secondary">▹</span>React
          </li>
          <li>
            <span className="mr-2 text-secondary">▹</span>MySQL
          </li>
          <li>
            <span className="mr-2 text-secondary">▹</span>MongoDB
          </li>
          <li>
            <span className="mr-2 text-secondary">▹</span>Express
          </li>
        </ul>
      </div>
      <div className="relative w-3/4 sm:w-full mr-8 mb-8 ">
        <div className="inset-0 flex aspect-square items-center justify-center">
          <img src={profileImage} alt="Temporary Image" className="h-full w-full rounded-lg object-cover" />
        </div>
        <div className="absolute left-8 top-8 z-[-10] aspect-square w-full rounded-lg border-2 border-secondary"></div>
        <div className="absolute inset-0 flex aspect-square items-center justify-center rounded-lg bg-black opacity-15" />
      </div>
    </div>
  </section>
)

export default About
