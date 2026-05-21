export function SocialIcon({ type }) {
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="35%" stopColor="#fa7e1e" />
            <stop offset="68%" stopColor="#d62976" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#instagramGradient)" />
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.8" r="1.2" fill="#fff" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0a66c2" />
        <rect x="6" y="9.2" width="2.5" height="8.2" fill="#fff" />
        <circle cx="7.25" cy="6.7" r="1.45" fill="#fff" />
        <path
          d="M11 9.2h2.4v1.2c.6-.9 1.7-1.5 3.2-1.5 2.6 0 4 1.5 4 4.7v3.8H18v-3.5c0-1.7-.6-2.6-2-2.6-1.4 0-2.3 1-2.3 2.6v3.5H11V9.2z"
          fill="#fff"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#1877f2" />
      <path
        d="M13.2 20v-6.6h2.2l.4-2.6h-2.6V9.1c0-.8.3-1.5 1.6-1.5H16V5.4c-.3 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v2.3H9v2.6h2.1V20h2.1z"
        fill="#fff"
      />
    </svg>
  )
}
