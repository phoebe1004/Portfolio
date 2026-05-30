// Line icons used in the About section service timeline.
// They are inline SVGs so the portfolio does not need an extra icon package.

const icons = {
  code: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12">
      <path d="M9 9h24v17H9zM14 31h14M18 26v5M24 26v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="m17 16-4 4 4 4M25 16l4 4-4 4M22 15l-3 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M37 21v-3M37 36v-3M29.5 25.5l-2.1-2.1M46.6 34.6l-2.1-2.1M29.5 32.5l-2.1 2.1M46.6 23.4l-2.1 2.1M34 28h6v6h-6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12">
      <path d="M14 7h15l7 7v27H14zM29 7v8h7M19 20h12M19 26h10M19 32h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 14v27h22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12">
      <path d="M13 35h22a8 8 0 0 0 0-16 11 11 0 0 0-21.4-2.7A9.5 9.5 0 0 0 13 35z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M17 29h14v10H17zM21 29v10M27 29v10M15 39h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M35 28l2 2 4-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
}

function ServiceIcon({ name }) {
  return icons[name] ?? icons.code
}

export default ServiceIcon
