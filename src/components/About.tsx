import SectionHeader from './util/SectionHeader'

const About = () => (
  <section id="about" className="section max-w-4xl flex-col h-[80vh] flex justify-center">
    <SectionHeader number="01" title="About Me" />
    <div className="flex flex-col sm:flex-row gap-[50px]">
      <div className="text-textAccent w-full">
        <p className="mb-[15px]">
          Hi, I'm Felix Zhu, a recent graduate with a Bachelor's degree in Computer Science from Stony Brook University, where I developed a strong
          foundation in software development and technology. Passionate about creating efficient and innovative solutions, I am eager to leverage my
          academic background and hands-on experience to embark on a career in software development.
        </p>
        <p className="mb-[15px]">Here are a few technologies I’ve been focusing on:</p>
        <ul className="gap-[0px 10px] grid list-none grid-cols-2 overflow-hidden p-0">
          <li><span className='text-secondary mr-2'>▹</span>Java</li>
          <li><span className='text-secondary mr-2'>▹</span>Python</li>
          <li><span className='text-secondary mr-2'>▹</span>React</li>
          <li><span className='text-secondary mr-2'>▹</span>MySQL</li>
          <li><span className='text-secondary mr-2'>▹</span>MongoDB</li>
          <li><span className='text-secondary mr-2'>▹</span>Express</li>
        </ul>
      </div>
      <img src="https://example.com/your-image.jpg" alt="Temporary Image" className="sm:w-full h-full w-full bg-textBase" />
    </div>
  </section>
)

export default About
