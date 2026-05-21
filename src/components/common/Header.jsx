import { useState } from 'react'
import { Brand } from './Brand'
import { navItems } from '../../constants/data'

export function Header({ route, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigate = (newRoute) => {
    setIsMenuOpen(false)
    onNavigate(newRoute)
  }

  return (
    <header className="topbar">
      <div className="topbar__header">
        <button className="brand brand--button" onClick={() => handleNavigate('home')} type="button">
          <img src="/logo.png" alt="Shaarav Enterprise logo" className="brand__logo" />
          <Brand />
        </button>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.route}
            className={item.route === route ? 'is-active' : ''}
            onClick={() => handleNavigate(item.route)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
