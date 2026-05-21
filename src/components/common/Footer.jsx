import { Brand } from './Brand'
import { SocialIcon } from './SocialIcon'
import { navItems, contactCards } from '../../constants/data'

export function Footer({ onNavigate }) {
  return (
    <footer className="footer page-shell">
      <div className="footer__top">
        <button className="brand brand--button footer__brand-button" onClick={() => onNavigate('home')} type="button">
          <img src="/logo.png" alt="" className="footer__logo" />
          <Brand />
        </button>

        <div className="footer__links">
          {navItems.map((item) => (
            <button key={item.route} onClick={() => onNavigate(item.route)} type="button">
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="footer__socials">
        {contactCards.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-card ${item.colorClass}`}
          >
            <div className="social-card__icon">
              <SocialIcon type={item.icon} />
            </div>
            <div className="social-card__copy">
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          </a>
        ))}
      </div>

      <p className="footer__copyright">Copyright (c) 2026 Shaarav Enterprise. All Rights Reserved.</p>
    </footer>
  )
}
