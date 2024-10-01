import GitHubIcon from '../assets/svg/github.svg?react'
import LinkedInIcon from '../assets/svg/linkedin.svg?react'
import MailIcon from '../assets/svg/mail.svg?react'
import SVGIcon from './utils/SVGIcon'

const Footer: React.FC = () => {
  const linkedinLink = 'https://www.linkedin.com/in/felix-zhu00/'
  const githubLink = 'https://github.com/felixzhu00'
  const emailLink = 'mailto:felix.zhu00@gmail.com'
  return (
    <footer className="bg-primary py-2 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4 flex space-x-4">
          <div className="mt-10 flex flex-row justify-end gap-6">
            <a aria-label="External Link" target="_blank" href={emailLink} rel="noopener noreferrer">
              <SVGIcon iconName="mail" SvgComponent={MailIcon} className="h-8 w-8 fill-text-950" />
            </a>
            <a aria-label="External Link" target="_blank" href={githubLink} rel="noopener noreferrer">
              <SVGIcon iconName="github" SvgComponent={GitHubIcon} className="h-8 w-8 fill-text-950" />
            </a>
            <a aria-label="External Link" target="_blank" href={linkedinLink} rel="noopener noreferrer">
              <SVGIcon iconName="linkedIn" SvgComponent={LinkedInIcon} className="h-8 w-8 fill-text-950" />
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-400">&copy; 2024 Felix Zhu. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
