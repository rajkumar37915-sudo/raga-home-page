import process1 from '../assets/process-1.jpg'
import process2 from '../assets/process-2.jpg'
import process3 from '../assets/process-3.jpg'
import process4 from '../assets/process-4.jpg'

const workSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your brand, audience, and competitive landscape to set a clear direction.',
    image: process1,
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Clean wireframes and high-fidelity mockups that balance aesthetics with functionality.',
    image: process2,
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Responsive, performant code that works flawlessly across all devices.',
    image: process3,
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Deployment, monitoring, and optimization to ensure long-term success.',
    image: process4,
  },
]

export default function HowWeWork() {
  return (
    <section className="section how-we-work-section" id="how">
      <div className="section-header">
        <p className="section-label">How We Work</p>
        <h2>A proven process that delivers results.</h2>
      </div>
      <div className="steps-grid">
        {workSteps.map((item) => (
          <article key={item.step} className="step-card">
            <div className="step-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="step-number">{item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
