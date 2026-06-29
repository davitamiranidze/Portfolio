import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I use to build modern applications."
      />

      <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card flex h-full flex-col">
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
          </div>
        ))}
      </div>
    </section>
  );
}
