import GitHubIcon from '../assets/svg/github.svg?react'
import LinkedInIcon from '../assets/svg/linkedin.svg?react'
import MailIcon from '../assets/svg/mail.svg?react'

import SVGIcon from './util/SVGIcon'

const Contact: React.FC = () => {
  const linkedinLink = 'https://www.linkedin.com/in/felix-zhu00/'
  const githubLink = 'https://github.com/felixzhu00'
  const emailLink = 'mailto:felix.zhu00@gmail.com'
  return (
    <section id="contact" className="section mx-auto mb-24 flex h-[80vh] max-w-[600px] items-center text-center">
      <div>
        <h2 className="text-md mb-2 block font-mono font-normal text-secondary">04. What’s Next?</h2>
        <h2 className="m-0 mb-10 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.1] text-[##ccd6f6] text-textBase">Get In Touch</h2>
        <p className="m-0 mb-20 text-textAccent">
          Currently seeking new opportunities and eager to connect! Whether you have a job opportunity or any queries, feel free to reach out—I'm
          ready to discuss.
        </p>
        <a
          href="mailto:felix.zhu00@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="mt-12 rounded border border-secondary px-4 py-3 font-mono text-secondary"
        >
          Say Hello
        </a>
        <div className="mt-10 flex flex-row justify-end gap-2">
          <a aria-label="External Link" target="_blank" href={emailLink} rel="noopener noreferrer">
            <SVGIcon SvgComponent={MailIcon} color="var(--color-text-accent)" />
          </a>
          <a aria-label="External Link" target="_blank" href={githubLink} rel="noopener noreferrer">
            <SVGIcon SvgComponent={GitHubIcon} color="var(--color-text-accent)" />
          </a>
          <a aria-label="External Link" target="_blank" href={linkedinLink} rel="noopener noreferrer">
            <SVGIcon SvgComponent={LinkedInIcon} color="var(--color-text-accent)" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
