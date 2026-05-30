import { contactLinks } from '../../data/portfolio'

// These small SVG icons keep the contact section fast and dependency-free.
const socialLinks = [
  {
    label: 'GitHub',
    href: contactLinks.github,
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9 18v-2.1c-2.4.5-3-1-3-1M15 18v-2.6c0-.8-.3-1.4-.8-1.8 1.9-.2 3.8-1 3.8-4.1 0-.9-.3-1.7-.9-2.3.1-.3.3-1.2-.1-2.2 0 0-.8-.2-2.5.9a8.6 8.6 0 0 0-5 0C7.8 4.8 7 5 7 5c-.4 1-.2 1.9-.1 2.2A3.2 3.2 0 0 0 6 9.5c0 3.1 1.9 3.9 3.8 4.1-.4.4-.7.9-.8 1.5" />
      </>
    ),
  },
  {
    label: 'GitLab',
    href: contactLinks.gitlab,
    icon: (
      <>
        <path d="M4 9.5 6.1 4l3 5.5" />
        <path d="M20 9.5 17.9 4l-3 5.5" />
        <path d="M4 9.5 12 20l8-10.5Z" />
        <path d="M9.1 9.5h5.8L12 20Z" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: contactLinks.linkedin,
    icon: (
      <>
        <path d="M6.5 10v8" />
        <path d="M6.5 6v.2" />
        <path d="M11 18v-8" />
        <path d="M11 13.5c0-2 1.1-3.5 3.1-3.5 2.2 0 3.4 1.5 3.4 4v4" />
      </>
    ),
  },
]

function ContactSection() {
  const emailHref = `mailto:${contactLinks.email}`

  return (
    <section id="contact" className="border-t border-white/5 bg-[#071820] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ff6f61]">Contacts</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            I&apos;m open to web development, system analysis, QA support, and full-stack opportunities where practical problem-solving matters.
          </p>
        </div>

        <div className="gradient-outline-card group mx-auto max-w-4xl rounded-lg bg-[#0a202a] p-[1px]">
          <div className="relative overflow-hidden rounded-lg bg-[#0a202a] p-6 md:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full bg-[#ff6f61]/10 blur-3xl" />
            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Primary contact</p>
                <a
                  href={emailHref}
                  className="mt-3 block break-all text-xl font-black text-white transition-colors hover:text-[#ff8a7f] md:text-2xl"
                >
                  {contactLinks.email}
                </a>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                  Send me a message for collaboration, or development opportunities.
                </p>
              </div>

              {/* The social dock keeps profile links compact without mixing them into the email CTA. */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-slate-200 transition hover:-translate-y-1 hover:border-[#ff6f61] hover:text-[#ff8a7f]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      {link.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
