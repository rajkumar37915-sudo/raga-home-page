const experience = [
  {
    label: '50+',
    title: 'Projects Delivered',
  },
  {
    label: '35+',
    title: 'Brands Trusted Us',
  },
  {
    label: '8+',
    title: 'Years of Excellence',
  },
  {
    label: '100%',
    title: 'Client Satisfaction',
  },
]

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="experience-grid">
        {experience.map((item) => (
          <div key={item.label} className="experience-card">
            <div className="experience-number">{item.label}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
