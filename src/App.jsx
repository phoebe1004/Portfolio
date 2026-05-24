import Hero from './components/Hero'
import Navbar from './components/Navbar'

const services = [
  {
    title: 'Website Development',
    detail: 'Clean responsive pages, reusable components, and polished frontend flows.',
  },
  {
    title: 'API Development',
    detail: 'Django and DRF backends with authentication, permissions, and practical data models.',
  },
  {
    title: 'Deployment Support',
    detail: 'Preparing projects to run smoothly beyond the local machine.',
  },
]

const projects = [
  {
    title: 'DevDash Analytics',
    description: 'A responsive analytics workspace with live metrics, role-based views, and fast filtering for product teams.',
    stack: ['React', 'Django REST', 'PostgreSQL'],
  },
  {
    title: 'TaskFlow API',
    description: 'A REST API for project tracking, authentication, permissions, and reporting-ready data models.',
    stack: ['Django', 'DRF', 'JWT'],
  },
  {
    title: 'LaunchPad Site',
    description: 'A landing experience with reusable sections, accessible interactions, and mobile-first layouts.',
    stack: ['React', 'Tailwind', 'Vite'],
  },
]

const stats = [
  { value: '120', suffix: '+', label: 'Completed projects' },
  { value: '95', suffix: '%', label: 'Client satisfaction' },
  { value: '10', suffix: '+', label: 'Years of experience' },
]

function App() {
  return (
    <main className="min-h-screen bg-[#0c1a22] text-white">
      <Navbar />
      <Hero />

      <section id="about" className="bg-[#0c1a22] py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.78fr_1fr]">
          <div className="relative space-y-10 border-l border-[#ff745f]/60 pl-7">
            {services.map((service) => (
              <article key={service.title} className="relative">
                <span className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full bg-[#ff745f]" />
                <h3 className="text-sm font-black text-white">{service.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">{service.detail}</p>
              </article>
            ))}
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff745f]">About me</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">I enjoy building things for the web.</h2>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300">
              I started learning web development because I wanted to create useful software from scratch. Since then, I have been building full-stack projects, improving my UI taste, and learning how to make applications simpler for people to use.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black">
                    {stat.value}
                    <span className="text-[#ff745f]">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#0a161d] py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff745f]">Projects</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Selected work</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-sm border border-white/8 bg-[#101f28] p-6 transition hover:-translate-y-1 hover:border-[#ff745f]/50">
                <div className="mb-6 h-36 rounded-sm bg-[linear-gradient(135deg,rgba(255,116,95,0.85),rgba(24,49,60,0.9))]" />
                <h3 className="text-xl font-black">{project.title}</h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-sm border border-white/10 px-3 py-2 text-xs font-bold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0c1a22] py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff745f]">Contacts</p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">Got a project?</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-300">
            I am open to frontend, backend, and full-stack projects where thoughtful engineering and a clean user experience matter.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:hello@example.com" className="rounded-sm bg-[#ff745f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#ff8a78]">
              Email me
            </a>
            <a href="https://github.com/" className="rounded-sm border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-[#ff745f] hover:text-[#ff8a78]">
              GitHub
            </a>
            <a href="https://linkedin.com/" className="rounded-sm border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-[#ff745f] hover:text-[#ff8a78]">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
