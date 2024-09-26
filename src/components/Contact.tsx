import HoverButton from './utils/HoverButton'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-spacing flex">
      <div className="section-inner items-center py-20 text-center">
        <h2 className="m-0 mb-10 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.1]">Get In Touch</h2>
        <p className="m-0 mb-20">
          Currently seeking new opportunities and eager to connect! Whether you have a job opportunity or any queries, feel free to reach out—I'm
          ready to discuss.
        </p>

        <HoverButton innerClass="px-4 py-3">
          <a href="mailto:felix.zhu00@gmail.com" rel="noopener noreferrer" target="_blank">
            Say Hello
          </a>
        </HoverButton>
      </div>
    </section>
  )
}

export default Contact
