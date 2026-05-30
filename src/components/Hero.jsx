import phoebePhoto from '../assets/phoebe-cutout-final.png'

const tools = ['Django', 'Python REST APIs', 'JavaScript', 'Systems Analysis', 'FRD/BRD', 'QA Testing', 'Git']

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0c1a22] pt-16 text-white">
      <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-8 px-5 pb-2 pt-10 sm:px-8 sm:pb-0 sm:pt-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left side: main introduction and call-to-action buttons. */}
        <div className="relative z-10">
          <p className="text-3xl font-black">
            Hello<span className="text-[#ff745f]">.</span>
          </p>
          <div className="mt-6 flex items-center gap-5">
            <span className="h-px w-24 bg-[#ff745f]" />
            <p className="text-2xl text-white">I'm Phoebe</p>
          </div>
          <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight sm:text-5xl">
            Web Developer & Systems Analyst
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
            I build and support internal systems using Django, Python REST APIs, and JavaScript for frontend workflows, while also gathering requirements, preparing FRD and BRD documents, and supporting QA testing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-sm bg-[#ff745f] px-5 py-3 text-xs font-black text-white transition hover:bg-[#ff8a78]">
              Got a project?
            </a>
            <a href="#resume" className="rounded-sm border border-white/40 px-5 py-3 text-xs font-black text-white transition hover:border-[#ff745f] hover:text-[#ff8a78]">
              My Resume
            </a>
          </div>
        </div>

        {/* Right side: portrait composition inspired by the reference design. */}
        <div className="relative mx-auto flex min-h-[340px] w-full max-w-lg translate-y-8 items-end justify-center sm:min-h-[500px] sm:translate-y-10">
          {/* Decorative coral ring and bracket marks sit behind the photo. */}
          <div className="absolute top-12 h-64 w-64 rounded-full bg-[#ff745f]/12 blur-3xl sm:top-16 sm:h-[24rem] sm:w-[24rem]" />
          <div className="absolute top-12 h-64 w-64 rounded-full border-[11px] border-[#ff745f] shadow-[0_0_90px_rgba(255,116,95,0.25)] sm:top-16 sm:h-[24rem] sm:w-[24rem] sm:border-[15px]" />
          <div className="pointer-events-none absolute left-1 top-28 z-20 text-5xl font-light leading-none text-[#ff745f]/40 sm:-left-3 sm:top-36 sm:text-8xl">&lt;</div>
          <div className="pointer-events-none absolute right-1 top-64 z-20 text-5xl font-light leading-none text-[#ff745f]/40 sm:-right-3 sm:top-[22rem] sm:text-8xl">&gt;</div>

          <div className="relative z-10 h-[340px] w-[min(100%,20rem)] overflow-hidden sm:h-[500px] sm:w-[450px]">
            {/* The mask softly fades the lower edge of the cutout into the dark hero background. */}
            <img
              src={phoebePhoto}
              alt="Phoebe Claire Lanquino"
              className="absolute bottom-[-5px] left-1/2 h-[320px] max-w-none -translate-x-1/2 object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,#000_0%,#000_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_88%,transparent_100%)] sm:bottom-[-18px] sm:h-[515px]"
            />
          </div>
        </div>
      </div>

      <div className="border-y border-white/5 bg-[#101f28]">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 px-5 py-5 sm:gap-4 sm:px-8">
          {/* Skill chips use an animated outline-only hover from index.css. */}
          {tools.map((tool) => (
            <span
              key={tool}
              className="gradient-outline-chip rounded-sm border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-slate-300 transition duration-300 hover:text-white"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
