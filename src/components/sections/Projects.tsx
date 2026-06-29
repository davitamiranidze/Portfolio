import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        title="Projects"
        subtitle="Some of the projects I've built using modern web technologies."
      />

      <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}