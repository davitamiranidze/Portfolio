import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="section flex min-h-[calc(100svh-72px)] items-center"
    >
      <motion.div
        className="w-full max-w-4xl"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.p
          className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500 sm:mb-4 sm:text-sm sm:tracking-[0.3em] dark:text-zinc-400"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          Software Developer
        </motion.p>

        <motion.h1
          className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm{" "}
          <span className="text-black dark:text-white">Daviti Amiranidze</span>
        </motion.h1>

        <motion.p
          className="paragraph mt-5 max-w-2xl sm:mt-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          I build modern, responsive web applications with React, TypeScript,
          and clean user-focused interfaces.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <a href="/cv.pdf" download className="btn-primary w-full sm:w-auto">
            Download CV
          </a>

          <a href="#projects" className="btn-secondary w-full sm:w-auto">
            View Projects
          </a>

          <a href="#contact" className="btn-secondary w-full sm:w-auto">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
