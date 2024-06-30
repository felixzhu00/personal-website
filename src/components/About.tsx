import SectionHeader from './util/SectionHeader'

const About = () => (
  <section id="about" className="section max-w-4xl flex-col">
    <SectionHeader number="01" title="About Me" />
    <div className="grid grid-cols-[3fr,2fr] gap-[50px]">
      <div className="text-textAccent">
        <p className="mb-[15px]">
          Hi, I'm Felix Zhu, a recent graduate with a Bachelor's degree in Computer Science from Stony Brook University, where I developed a strong
          foundation in software development and technology. Passionate about creating efficient and innovative solutions, I am eager to leverage my
          academic background and hands-on experience to embark on a career in software development.
        </p>
        <p className="mb-[15px]">Here are a few technologies I’ve been focusing on:</p>
        <ul className="gap-[0px 10px] grid list-none grid-cols-2 overflow-hidden p-0">
          <li>Java</li>
          <li>Python</li>
          <li>React</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Express</li>
        </ul>
      </div>
      <img src="https://example.com/your-image.jpg" alt="Temporary Image" className="h-full w-full bg-textBase" />
    </div>
  </section>
)

export default About
