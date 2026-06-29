import { motion } from "motion/react";
import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/skills";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I use to build modern applications."
      />

      <motion.div
        className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={item}
            transition={{ duration: 0.5 }}
            className="card flex h-full flex-col"
          >
            <h3 className="mb-5 text-xl font-semibold capitalize sm:mb-6 sm:text-2xl">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {items.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
