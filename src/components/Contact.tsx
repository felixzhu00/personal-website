import GitHubIcon from '../assets/svg/github.svg?react'
import LinkedInIcon from '../assets/svg/linkedin.svg?react'
import SVGIcon from './util/SVGIcon'

const Contact: React.FC = () => {


  return (
    <section id="contact" className="section mx-auto mb-24 flex h-[80vh] max-w-[600px] items-center text-center">
      <div>
        <h2 className="text-md mb-2 block font-mono font-normal text-secondary">04. What’s Next?</h2>
        <h2 className="m-0 mb-10 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.1] text-[##ccd6f6] text-textBase">Get In Touch</h2>
        <p className="m-0 mb-20 text-textAccent">
          Currently seeking new opportunities and eager to connect! Whether you have a job opportunity or any queries, feel free to reach out—I'm
          ready to discuss.
        </p>
        <a href="" rel="noopener noreferrer" target="_blank" className="mt-12 rounded border border-secondary px-4 py-3 font-mono text-secondary">
          Say Hello
        </a>
        <div className='flex flex-row gap-2 justify-end mt-10'>
          <SVGIcon SvgComponent={GitHubIcon} color="var(--color-text-accent)" />
          <SVGIcon SvgComponent={LinkedInIcon} color="var(--color-text-accent)" />
        </div>
      </div>
      
    </section>
    
  )
}

export default Contact
{
  /* <section id="contact" className="pg-style flex flex-col">
<h2 className="header">Contact</h2>
<form onSubmit={handleSubmit} className='flex flex-col gap-2 bg-secondary rounded-xl p-10'>
  <div className="form-group flex flex-col">
    <label htmlFor="name">Name</label>
    <input
      className='w-1/3'
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group flex flex-col">
    <label htmlFor="email">Email</label>
    <input
    className='w-1/2 '
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group flex flex-col">
    <label htmlFor="phone">Phone</label>
    <input
    className='w-1/2'
      type="tel"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
    />
  </div>
  <div className="form-group flex flex-col">
    <label htmlFor="message">Message</label>
    <textarea
    className='w-full'
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
    />
  </div>
  <button type="submit">Submit</button>
</form>
</section> */
}
