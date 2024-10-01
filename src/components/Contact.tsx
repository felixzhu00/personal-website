import { useRef, useState } from 'react'
import HoverButton from './utils/HoverButton'
import { motion } from 'framer-motion'
import { MailCheck, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errorMessage, setErrorMessage] = useState('')

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic (e.g., API call)

    // Valid Form Data
    const validForm = validateForm()

    console.log(validForm)
    // Return if Not valid
    if (!validForm) return

    // Do Submit Actions
    setIsSubmitted(true)

    if (!form.current) return
    // EmailJS Logic
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )

    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    })
  }
  const validateForm = () => {
    // Decontruct FormData
    const { firstName, email, phone, message } = formData

    // Error Message to be Build
    let stringBuilder = ''

    // Check First Name
    if (!firstName) stringBuilder += '* First Name is Required\n'
    // Check Email
    if (!email) stringBuilder += '* Email is Required\n'

    const validEmail = email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    if (!validEmail) stringBuilder += '* Invalid Email Format\n'

    // Check Phone
    const validPhone = phone.toLowerCase().match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)
    if (!validPhone) stringBuilder += '* Invalid Phone Format\n'

    // Check Message
    if (!message) stringBuilder += '* Message Field is Required\n'

    console.log(stringBuilder.slice(0, -1))

    setErrorMessage(stringBuilder.slice(0, -1)) // Remove last \n

    return !stringBuilder
  }

  const inputStyling = 'focus:border-blue-600 '

  const inputBoxStyling = `block h-12 flex-1 w-full rounded-md bg-text-200 paragraph ${inputStyling} p-4 resize-none`

  const labelStyling = 'mb-2 block text-text-950 ml-0.5 sub-heading'

  const placeholder = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe123@example.com',
    phone: '9876543210',
    message: 'Type to Start Messaging . . . ',
  }

  return (
    <section id="contact" className="section-spacing flex">
      <div className="section-inner mx-auto items-center py-20 text-center">
        <h2 className="m-0 mb-4 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.1]">Get In Touch</h2>
        <p className="paragraph m-0 mx-auto mb-12 w-full text-center">
          Currently seeking new opportunities and eager to connect! Whether you have a job opportunity or any queries, feel free to reach out—I'm
          ready to discuss.
        </p>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-between gap-3 rounded-md bg-background-100 p-8 text-text-950"
          >
            <div className="sub-heading">Thank you for your message. </div>I appreciate your message and will respond as soon as possible.
            <MailCheck className="mt-8 h-8 w-8" />
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            ref={form}
            className="mx-auto flex w-full flex-col items-center space-y-3 rounded-md bg-background-100 p-8 text-left"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex w-full space-x-3">
              <div className="relative flex-1">
                <label htmlFor="firstName" className={labelStyling}>
                  First Name <span className="text-accent-600">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputBoxStyling}
                  placeholder={placeholder.firstName}
                />
              </div>
              <div className="relative flex-1">
                <label htmlFor="lastName" className={labelStyling}>
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputBoxStyling}
                  placeholder={placeholder.lastName}
                />
              </div>
            </div>
            <div className="flex w-full space-x-3">
              <div className="relative w-full">
                <label htmlFor="email" className={labelStyling}>
                  Email <span className="text-accent-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputBoxStyling}
                  placeholder={placeholder.email}
                />
              </div>
              <div className="relative w-full">
                <label htmlFor="phone" className={labelStyling}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputBoxStyling}
                  placeholder={placeholder.phone}
                />
              </div>
            </div>

            <div className="relative w-full">
              <label htmlFor="message" className={labelStyling}>
                Message <span className="text-accent-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputBoxStyling} h-48`}
                placeholder={placeholder.message}
              ></textarea>
            </div>

            <span className="pb-4 text-center text-accent-600" style={{ whiteSpace: 'pre-line' }}>
              {errorMessage}
            </span>

            <HoverButton innerClass="px-8 py-3 ">
              <button type="submit" className="flex w-full flex-row items-center justify-between gap-3 rounded-md font-semibold">
                <span>Send</span>
                <Send className="h-4 w-4" />
              </button>
            </HoverButton>
          </motion.form>
        )}
      </div>
    </section>
  )
}

export default Contact
