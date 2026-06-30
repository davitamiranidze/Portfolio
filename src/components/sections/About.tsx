import SectionTitle from "../ui/SectionTitle";
import { motion } from "motion/react";

const quickFacts = [
  { label: "Location", value: "France" },
  { label: "Degree", value: "B.Sc. Computer Science" },
  { label: "Focus", value: "Frontend & Backend" },
  { label: "Languages", value: "English • French • Georgian" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle title="About Me" />

      <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-5 sm:space-y-6"
        >
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <p className="paragraph">
              I'm a frontend developer passionate about building modern,
              responsive, and accessible web applications that deliver great
              user experiences.
            </p>

            <p className="paragraph">
              I enjoy turning ideas into reliable software by developing
              intuitive user interfaces, integrating REST APIs, and writing
              clean, maintainable code. I'm committed to continuous learning and
              delivering high-quality solutions that create real value.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl space-y-5 sm:space-y-6"
        >
          <div className="card w-full">
            <h3 className="text-xl font-semibold sm:text-2xl">Quick Facts</h3>

            <div className="mt-6 divide-y divide-zinc-200 sm:mt-8 dark:divide-zinc-800">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 py-4 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-4"
                >
                  <span className="text-sm text-zinc-500 sm:text-base dark:text-zinc-400">
                    {fact.label}
                  </span>

                  <span className="break-words text-sm font-medium text-zinc-900 sm:text-right sm:text-base dark:text-zinc-100">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
