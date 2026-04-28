const services = [
  {
    title: 'Brand Identity',
    description: 'Logo systems, style guides, and visual language that feels premium and memorable.',
  },
  {
    title: 'Web Experience',
    description: 'Responsive websites built for conversion, speed, and platform consistency.',
  },
  {
    title: 'Product Strategy',
    description: 'Research-informed direction for product design, launch, and growth.',
  },
]

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-header">
        <p className="section-label">Services</p>
        <h2>From identity systems to polished homepage experiences.</h2>
      </div>
      <div className="cards-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
