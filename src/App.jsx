import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import Experience from './components/Experience'
import Clients from './components/Clients'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <Experience />
        <Clients />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
