type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <article className="card flex h-full flex-col">
      <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>

      <p className="paragraph mt-3 flex-1 sm:mt-4">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
        {tech.map((item) => (
          <span key={item} className="badge">
            {item}
          </span>
        ))}
      </div>

      {(githubUrl || demoUrl) && (
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full rounded-lg sm:w-auto"
            >
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full rounded-lg sm:w-auto"
            >
              GitHub Repo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
