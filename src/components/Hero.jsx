import heroImg from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <span className="eyebrow">Design that speaks premium</span>
        <h1>Thoughtful websites, polished brand systems, and memorable digital experiences.</h1>
        <p>
          We craft modern homepage layouts for growth-focused brands seeking clean,
          responsive design with clear user journeys.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="button button-primary">Start a project</a>
          <a href="#work" className="button button-secondary">View portfolio</a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <img src={heroImg} alt="Creative workspace" className="hero-image" />
        <div className="hero-card hero-card-large">
          <span>Creative Direction</span>
          <strong>Premium visuals</strong>
        </div>
      </div>
    </section>
  )
}
