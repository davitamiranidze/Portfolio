type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  status?: "In Progress" | "Completed";
};

export default function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
  demoUrl,
  status,
}: ProjectCardProps) {
  return (
    <article className="card relative flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>

        {status && (
          <span className="shrink-0 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            {status}
          </span>
        )}
      </div>

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
