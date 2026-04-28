import project1 from '../assets/work-1.jpg'
import project2 from '../assets/work-2.jpg'
import project3 from '../assets/work-3.jpg'

const projects = [
  {
    title: 'Aurora Studio',
    category: 'Brand & Website',
    summary: 'A refined identity and landing page that supports premium creative services.',
    image: project1,
  },
  {
    title: 'Luma Health',
    category: 'UI/UX Redesign',
    summary: 'Modern wellness dashboard with improved navigation and performance.',
    image: project2,
  },
  {
    title: 'Crafted Labs',
    category: 'Digital Product',
    summary: 'A polished showcase experience for design-led technology products.',
    image: project3,
  },
]

export default function Portfolio() {
  return (
    <section className="section work-section" id="work">
      <div className="section-header">
        <p className="section-label">Portfolio</p>
        <h2>Selected work that feels polished and refined.</h2>
      </div>
      <div className="work-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-meta">
              <span>{project.category}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
