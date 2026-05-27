import Hero from './components/Hero'
import Navbar from './components/Navbar'

const services = [
  {
    title: 'Systems Development',
    detail: 'Building and maintaining in-house systems, fixing bugs, and improving workflows for real users.',
  },
  {
    title: 'Requirements & Documentation',
    detail: 'Gathering data and preparing functional and business requirement documents such as FRD and BRD.',
  },
  {
    title: 'QA & Web Support',
    detail: 'Testing system behavior, checking issues, supporting website updates, email tasks, and social posting.',
  },
]

const resumeItems = [
  {
    title: 'Southern Philippines Medical Center',
    description: 'Works on in-house systems, data gathering, FRD and BRD documentation, bug fixing, and occasional QA support.',
    stack: ['Systems Development', 'Documentation', 'QA'],
  },
  {
    title: 'BCC Rail Ltd',
    description: 'Supports the UK-based company through website building, email handling, course updates, group announcements, and social media posting.',
    stack: ['Website Support', 'Admin Support', 'Social Media'],
  },
]

const stats = [
  { value: '2023', suffix: '', label: 'College graduate' },
  { value: '2', suffix: '+', label: 'Years professional experience' },
  { value: '2026', suffix: '', label: 'CSE passer' },
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
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">I work between development, documentation, and system support.</h2>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300">
              I graduated from Assumption College of Davao in 2023 and started working at Southern Philippines Medical Center in August 2023. My experience includes system development, data gathering, FRD and BRD documentation, bug fixing, QA support, and website/admin work for BCC Rail Ltd.
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

      <section id="resume" className="bg-[#0a161d] py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff745f]">Resume</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Experience highlights</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {resumeItems.map((item) => (
              <article key={item.title} className="rounded-sm border border-white/8 bg-[#101f28] p-6 transition hover:-translate-y-1 hover:border-[#ff745f]/50">
                <div className="mb-6 h-36 rounded-sm bg-[linear-gradient(135deg,rgba(255,116,95,0.85),rgba(24,49,60,0.9))]" />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span key={tag} className="rounded-sm border border-white/10 px-3 py-2 text-xs font-bold text-slate-300">
                      {tag}
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
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">Interested in working together?</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-300">
            I am open to web developer, systems analyst, QA support, and full-stack development opportunities where practical problem-solving matters.
          </p>
          <a
            href="mailto:phoebeclairelanquino@gmail.com"
            className="mt-5 inline-block text-sm font-semibold text-[#ff8a78] transition hover:text-white"
          >
            phoebeclairelanquino@gmail.com
          </a>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:phoebeclairelanquino@gmail.com" className="rounded-sm bg-[#ff745f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#ff8a78]">
              Email me
            </a>
            <a href="https://github.com/phoebe1004" className="rounded-sm border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-[#ff745f] hover:text-[#ff8a78]">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/phoebe-claire-lanquino-6ba876144" className="rounded-sm border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-[#ff745f] hover:text-[#ff8a78]">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
