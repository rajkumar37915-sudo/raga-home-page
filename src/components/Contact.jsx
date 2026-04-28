import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-header">
        <p className="section-label">Contact</p>
        <h2>Ready to build your next homepage?</h2>
      </div>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What are you looking to build?"
              rows="5"
              required
            />
          </label>
          <button type="submit" className="button button-primary">
            Send message
          </button>
          {submitted && <p className="form-success">Thanks! Your message has been sent.</p>}
        </form>
        <div className="contact-summary">
          <h3>Let's create something memorable.</h3>
          <p>
            Share a few details, and we'll follow up with a tailored proposal within 24 hours.
          </p>
          <ul>
            <li>Responsive design for every screen</li>
            <li>Fast-loading, modern layout structure</li>
            <li>Attention to spacing, typography, and brand tone</li>
          </ul>
          <div className="contact-info">
            <p><strong>Email:</strong> hello@ragadesigners.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Location:</strong> San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
