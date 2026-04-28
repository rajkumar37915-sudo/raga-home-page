const clients = [
  { name: 'Aurora Studio', industry: 'Creative Agency' },
  { name: 'Luma Health', industry: 'Wellness' },
  { name: 'Crafted Labs', industry: 'Technology' },
  { name: 'Vertex Digital', industry: 'SaaS' },
  { name: 'Luna Collective', industry: 'E-Commerce' },
  { name: 'Horizon Ventures', industry: 'Consulting' },
]

export default function Clients() {
  return (
    <section className="section clients-section" id="clients">
      <div className="section-header">
        <p className="section-label">Clients</p>
        <h2>Trusted by brands across industries.</h2>
      </div>
      <div className="clients-grid">
        {clients.map((client) => (
          <div key={client.name} className="client-card">
            <strong>{client.name}</strong>
            <p>{client.industry}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
