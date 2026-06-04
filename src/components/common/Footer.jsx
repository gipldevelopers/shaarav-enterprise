import { Brand } from './Brand'
import { SocialIcon } from './SocialIcon'
import { navItems, contactCards } from '../../constants/data'

export function Footer({ onNavigate }) {
  const companyLinks = navItems.slice(0, 3)
  const resourceLinks = navItems.slice(3)

  return (
    <footer className="footer page-shell" style={{ borderTop: '1px solid var(--color-muted)', paddingTop: '4rem', paddingBottom: '2rem', marginTop: '4rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <button className="brand brand--button footer__brand-button" onClick={() => onNavigate('home')} type="button" style={{ padding: 0, justifyContent: 'flex-start' }}>
            <img src="/logo.png" alt="" className="footer__logo" style={{ width: '64px', height: 'auto' }} />
            <Brand />
          </button>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', maxWidth: '300px' }}>
            Empowering individuals and micro-enterprises with structured solutions, strategic clarity, and disciplined financial guidance.
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontWeight: 600 }}>Company</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            {companyLinks.map((item) => (
              <button
                key={item.route}
                onClick={() => onNavigate(item.route)}
                type="button"
                style={{ textAlign: 'left', color: 'var(--color-muted)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.target.style.color = 'var(--color-accent-strong)'}
                onMouseOut={(e) => e.target.style.color = 'var(--color-muted)'}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontWeight: 600 }}>Insights</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            {resourceLinks.map((item) => (
              <button
                key={item.route}
                onClick={() => onNavigate(item.route)}
                type="button"
                style={{ textAlign: 'left', color: 'var(--color-muted)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.target.style.color = 'var(--color-accent-strong)'}
                onMouseOut={(e) => e.target.style.color = 'var(--color-muted)'}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontWeight: 600 }}>Connect</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {contactCards.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(215, 169, 107, 0.1)',
                  color: 'var(--color-accent-strong)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-accent-strong)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(215, 169, 107, 0.1)'; e.currentTarget.style.color = 'var(--color-accent-strong)'; e.currentTarget.style.transform = 'translateY(0)' }}
                aria-label={item.title}
              >
                <SocialIcon type={item.icon} />
              </a>
            ))}
          </div>
          <div style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p style={{ margin: 0, lineHeight: 1.4 }}>
              <a href="https://maps.google.com/?q=Shaarav+Enterprise,+B7-1601,+Waterlily,+Adani+Shantigram,+Nr+Vaishnodevi+Circle,+Ahmedabad+-+382421" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-[#8f6330] transition-colors">
                B7-1601, Waterlily, Adani Shantigram,<br />
                Nr Vaishnodevi Circle, Ahmedabad-382421
              </a>
            </p>
            <p style={{ margin: 0, lineHeight: 1.4 }}>
              <a href="tel:+919925528021" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-[#8f6330] transition-colors">+91 99255 28021</a><br />
              <a href="tel:+919023671539" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-[#8f6330] transition-colors">+91 90236 71539</a>
            </p>
            <p style={{ margin: 0, lineHeight: 1.4 }}>
              <a href="mailto:hello@shaaravglobalventures.com" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-[#8f6330] transition-colors break-all">hello@shaaravglobalventures.com</a>
            </p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(95, 111, 104, 0.2)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', margin: 0 }}>
          &copy; {new Date().getFullYear()} Gohil Infotech Private Limited• All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--color-muted)' }}>
          <a href="#/privacy" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', transition: 'color 0.2s', color: 'inherit', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--color-text)'} onMouseOut={(e) => e.target.style.color = 'var(--color-muted)'}>Privacy Policy</a>
          <a href="#/terms" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', transition: 'color 0.2s', color: 'inherit', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--color-text)'} onMouseOut={(e) => e.target.style.color = 'var(--color-muted)'}>Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
