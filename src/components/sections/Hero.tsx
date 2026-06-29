export default function Hero() {
  return (
    <section
      id="home"
      className="section flex min-h-[calc(100svh-72px)] items-center"
    >
      <div className="w-full max-w-4xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500 sm:mb-4 sm:text-sm sm:tracking-[0.3em] dark:text-zinc-400">
          Software Developer
        </p>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm{" "}
          <span className="text-black dark:text-white">Daviti Amiranidze</span>
        </h1>

        <p className="paragraph mt-5 max-w-2xl sm:mt-6">
          I build modern, responsive web applications with React, TypeScript,
          and clean user-focused interfaces.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <a href="/cv.pdf" download className="btn-primary w-full sm:w-auto">
            Download CV
          </a>

          <a href="#projects" className="btn-secondary w-full sm:w-auto">
            View Projects
          </a>

          <a href="#contact" className="btn-secondary w-full sm:w-auto">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
