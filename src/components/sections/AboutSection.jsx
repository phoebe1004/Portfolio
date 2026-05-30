import AnimatedStat from '../AnimatedStat'
import ServiceIcon from '../ServiceIcon'
import { services, stats } from '../../data/portfolio'

function ServiceTimelineItem({ service }) {
  return (
    <article className="relative flex gap-6">
      {/* Short line pieces and dot create the segmented vertical timeline. */}
      <span className="absolute -left-[1.82rem] top-[-1.15rem] h-10 w-px bg-[#ff745f]/80" />
      <span className="absolute -left-[2.15rem] top-8 h-3 w-3 rounded-full bg-[#ff745f]" />
      <span className="absolute -left-[1.82rem] top-12 h-10 w-px bg-[#ff745f]/80" />

      <div className="mt-1 shrink-0 text-slate-200">
        <ServiceIcon name={service.icon} />
      </div>
      <div>
        <h3 className="text-sm font-black text-white">{service.title}</h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">{service.detail}</p>
      </div>
    </article>
  )
}

function AboutSection() {
  return (
    <section id="about" className="bg-[#0c1a22] py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.78fr_1fr]">
        {/* Left column: service timeline with icons. */}
        <div className="relative space-y-10 pl-7">
          {services.map((service) => (
            <ServiceTimelineItem key={service.title} service={service} />
          ))}
        </div>

        <div>
          {/* Right column: profile summary and animated career stats. */}
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff745f]">About me</p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">Software developer with hands-on system experience.</h2>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300">
            I am a software developer with experience in backend and frontend development, systems analysis, QA testing, and technical documentation. I graduated with a Bachelor of Science in Information Technology from Assumption College of Davao in 2023 and currently develop, enhance, and maintain in-house systems at Southern Philippines Medical Center, while also supporting the UK-based BCC Rail Ltd by developing and updating its website, handling email and administrative tasks, posting course updates, preparing group announcements, and assisting with social media content.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
