import SectionHeader from './utils/SectionHeader'
import profileImage from '../assets/profile.png'

const About = () => (
  <section id="about" className="section-spacing paragraph flex flex-col justify-center">
    <SectionHeader number="01" title="About Me" />
    <div className="section-inner flex flex-col items-center justify-between gap-8 sm:flex-row">
      <div className="w-full">
        <p className="paragraph mb-4">
          Hi, I'm Felix Zhu, a recent graduate with a Bachelor's degree in Computer Science from{' '}
          <a
            className="text-text-600 underline underline-offset-4 hover:text-text-400"
            href="https://www.stonybrook.edu/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Stony Brook University
          </a>
          , where I developed a strong foundation in software development and technology. Passionate about creating efficient and innovative
          solutions, I am eager to leverage my academic background and hands-on experience to embark on a career in software development.
        </p>
      </div>
      <div className="relative mb-8 mr-8 w-3/4 sm:w-full">
        <div className="inset-0 flex aspect-square items-center justify-center">
          <img src={profileImage} alt="Temporary Image" className="h-full w-full rounded-lg object-cover" />
        </div>
        <div className="border-secondary absolute left-8 top-8 z-[-10] aspect-square w-full rounded-lg border-2"></div>
        <div className="absolute inset-0 flex aspect-square items-center justify-center rounded-lg bg-black opacity-15" />
      </div>
    </div>
  </section>
)

export default About
