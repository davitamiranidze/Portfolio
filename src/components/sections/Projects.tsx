import { motion } from "motion/react";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

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

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        title="Projects"
        subtitle="Some of the projects I've built using modern web technologies."
      />

      <motion.div
        className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 xl:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
