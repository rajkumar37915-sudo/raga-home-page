import avatar1 from '../assets/avatar-1.jpg'
import avatar2 from '../assets/avatar-2.jpg'
import avatar3 from '../assets/avatar-3.jpg'

const testimonials = [
  {
    name: 'Nina Patel',
    role: 'Founder, Studio Muse',
    quote: 'Raga Designers delivered a confident website that elevated our brand instantly.',
    avatar: avatar1,
  },
  {
    name: 'Alex Ford',
    role: 'CMO, Novum Ventures',
    quote: 'The process was clear, fast, and the final product felt premium at every touchpoint.',
    avatar: avatar2,
  },
  {
    name: 'Jordan Lee',
    role: 'CEO, Luma Health',
    quote: 'Exceptional attention to detail and responsive communication throughout the project.',
    avatar: avatar3,
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-header">
        <p className="section-label">Testimonials</p>
        <h2>Words from clients who value clarity and design craft.</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
            <p>"{item.quote}"</p>
            <div>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
