import ProjectPreview from '../ProjectPreview'
import { resumeItems } from '../../data/portfolio'

function ResumeCard({ item }) {
  return (
    <article className="gradient-outline-card rounded-sm border border-white/8 bg-[#101f28] p-6 transition duration-300 hover:-translate-y-1">
      {/* Preview is abstract for confidential work and mockup-style for public work. */}
      <ProjectPreview type={item.preview} />
      <h3 className="text-xl font-black">{item.title}</h3>
      <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">{item.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {/* Stack tags summarize the tools or responsibilities for this item. */}
        {item.stack.map((tag) => (
          <span key={tag} className="rounded-sm border border-white/10 px-3 py-2 text-xs font-bold text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex text-xs font-black text-[#ff8a78] transition hover:text-white"
        >
          Visit website
        </a>
      )}
    </article>
  )
}

function ResumeSection() {
  return (
    <section id="resume" className="bg-[#0a161d] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff745f]">Resume</p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">Experience highlights</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
            Selected work is summarized without screenshots, source code, or sensitive internal details due to confidentiality.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Cards come from src/data/portfolio.js so content is easy to update. */}
          {resumeItems.map((item) => (
            <ResumeCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
