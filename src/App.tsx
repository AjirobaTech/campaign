import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      title: 'Lightning Fast',
      description: 'Experience sub-second load times and near-instant HMR with our optimized build pipeline.',
      icon: '⚡'
    },
    {
      title: 'Premium Design',
      description: 'Built with a focus on aesthetics, accessibility, and high-performance user interfaces.',
      icon: '✨'
    },
    {
      title: 'Modern Stack',
      description: 'Leveraging React 18, TypeScript, and Vite for a future-proof development experience.',
      icon: '🚀'
    }
  ]

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo-text">AJIROBA</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#docs">Docs</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </nav>

      <main>
        <section className={`hero-section ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="hero-bg-gradient"></div>
          <h1 className="hero-title">
            Build the future of the web with <span className="logo-text">Ajiroba</span>
          </h1>
          <p className="hero-subtitle">
            A premium starting point for your next big idea. Optimized for speed, 
            designed for excellence, and ready for production.
          </p>
          
          <div className="cta-group">
            <button className="btn-primary">
              Get Started <span>→</span>
            </button>
            <button className="btn-secondary">
              View Documentation
            </button>
          </div>

          <div id="features" className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ padding: '60px 24px', textAlign: 'center', borderTop: '1px solid var(--border-subtle)', marginTop: '80px' }}>
        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Ajiroba. Built with passion and Vite.
        </p>
      </footer>
    </div>
  )
}

export default App
