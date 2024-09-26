import { useState } from 'react'

const ContactForm = () => {
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

  return (
    <div className="mx-auto max-w-md p-4">
      <form onSubmit={handleSubmit} className="space-y-6 section-inner">
        <div className="flex space-x-4">
          <div className="relative flex-1">
            <label htmlFor="firstName" className="paragraph mb-1 block font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="block h-12 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="relative flex-1">
            <label htmlFor="lastName" className="paragraph mb-1 block font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="block h-12 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="relative">
          <label htmlFor="email" className="paragraph mb-1 block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block h-12 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="relative">
          <label htmlFor="phone" className="paragraph mb-1 block font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="block h-12 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="relative">
          <label htmlFor="message" className="paragraph mb-1 block font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-600 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
