import { useState } from 'react'
import HoverButton from './utils/HoverButton'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic (e.g., API call)
    console.log('Form submitted:', formData)
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const inputStyling = 'focus:border-blue-600 '

  const inputBoxStyling = `block h-12 flex-1 w-full rounded-md bg-background-100 paragraph ${inputStyling} p-4`

  const labelStyling = 'mb-2 block text-text-950 ml-0.5 sub-heading'

  const placeholder = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith123@gmail.com',
    phone: '9134353451',
    message: 'Start Typing',
  }

  return (
    <section id="contact" className="section-spacing flex">
      <div className="section-inner items-center py-20 text-center">
        <h2 className="m-0 mb-4 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.1]">Get In Touch</h2>
        <p className="paragraph m-0 mx-auto mb-12 w-full text-justify">
          Currently seeking new opportunities and eager to connect! Whether you have a job opportunity or any queries, feel free to reach out—I'm
          ready to discuss.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto flex w-full flex-col items-center space-y-3 text-left">
          <div className="flex w-full space-x-3">
            <div className="relative flex-1">
              <label htmlFor="firstName" className={labelStyling}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={inputBoxStyling}
                placeholder={placeholder.firstName}
              />
            </div>
            <div className="relative flex-1">
              <label htmlFor="lastName" className={labelStyling}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={inputBoxStyling}
              />
            </div>
          </div>
          <div className="relative w-full">
            <label htmlFor="email" className={labelStyling}>
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputBoxStyling} />
          </div>
          <div className="relative w-full">
            <label htmlFor="phone" className={labelStyling}>
              Phone
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className={inputBoxStyling} />
          </div>
          <div className="relative w-full">
            <label htmlFor="message" className={labelStyling}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputBoxStyling} mb-8 h-48`}
            ></textarea>
          </div>

          <HoverButton innerClass="px-8 py-3 ">
            <button type="submit" className="w-full rounded-md font-semibold">
              Send
            </button>
          </HoverButton>
        </form>
      </div>
    </section>
  )
}

export default Contact
