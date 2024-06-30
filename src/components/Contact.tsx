import React, { useState, FormEvent, ChangeEvent } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you can handle form submission, e.g., send data to server or perform validation
    console.log(formData) // Replace with actual submission logic
    // Reset form after submission if needed
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <section id="contact">
      <h2>What’s Next?</h2>
      <h2>Get In Touch</h2>
      <p>
        Currently seeking new opportunities and eager to connect! Whether you have a job opportunity or any queries, feel free to reach out—I'm ready
        to discuss.
      </p>
      <a href="" rel="noopener noreferrer" target="_blank">
        Say Hello
      </a>
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
