const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contacts', href: '#contact' },
]

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0c1a22]/88 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-black text-white">
          Phoebe
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold text-slate-300 transition hover:text-[#ff745f]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@example.com"
          className="rounded-sm border border-[#ff745f] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#ff745f]"
        >
          Hire me
        </a>
      </nav>
    </header>
  )
}

export default Navbar
