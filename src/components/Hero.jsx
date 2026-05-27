const tools = ['Web Development', 'Systems Analysis', 'FRD/BRD', 'QA Testing', 'Django', 'React', 'Git']

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0c1a22] pt-16 text-white">
      <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
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
            I build and support internal systems, gather requirements, prepare FRD and BRD documents, test workflows, and develop web solutions with Django, React, and JavaScript.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-sm bg-[#ff745f] px-5 py-3 text-xs font-black text-white transition hover:bg-[#ff8a78]"
            >
              Got a project?
            </a>
            <a
              href="#resume"
              className="rounded-sm border border-white/40 px-5 py-3 text-xs font-black text-white transition hover:border-[#ff745f] hover:text-[#ff8a78]"
            >
              My Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[430px] w-full max-w-lg items-end justify-center">
          <div className="absolute bottom-9 h-80 w-80 rounded-full border-[18px] border-[#ff745f]/80 shadow-[0_0_80px_rgba(255,116,95,0.24)]" />
          <div className="absolute bottom-20 left-8 hidden text-7xl font-black text-[#ff745f]/25 sm:block">&lt;</div>
          <div className="absolute bottom-20 right-8 hidden text-7xl font-black text-[#ff745f]/25 sm:block">&gt;</div>

          <div className="relative z-10 flex h-[390px] w-[260px] flex-col items-center justify-end overflow-hidden rounded-t-[9rem] bg-gradient-to-b from-[#17313c] to-[#071018]">
            <div className="absolute top-12 h-28 w-28 rounded-full bg-gradient-to-br from-[#ffd4a8] to-[#c98357]" />
            <div className="absolute top-[8.2rem] h-52 w-48 rounded-t-[5rem] bg-gradient-to-b from-[#ffbe6f] to-[#1f3945]" />
            <div className="absolute top-[6.6rem] h-10 w-32 rounded-full bg-[#111827]" />
            <div className="absolute top-[8.9rem] h-16 w-40 rounded-t-[4rem] bg-[#142a35]" />
            <div className="relative mb-0 h-56 w-56 rounded-t-[5rem] bg-gradient-to-b from-[#183845] to-[#0a151c] shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="border-y border-white/5 bg-[#101f28]">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-12 gap-y-4 px-5 py-5 text-xs font-semibold text-slate-500 sm:px-8">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
