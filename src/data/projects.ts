export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  status?: "In Progress" | "Completed";
};

export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A modern task management application with authentication, drag-and-drop boards, and real-time task updates.",
    tech: ["React", "TypeScript", "Tailwind CSS", "React Query"],
    githubUrl: "",
    demoUrl: "",
    status: "In Progress",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions, hourly forecasts, and location-based weather using a public API.",
    tech: ["React", "TypeScript", "REST API", "Axios"],
    githubUrl: "",
    demoUrl: "",
    status: "In Progress",
  },
  {
    title: "E-Commerce Store",
    description:
      "A clean online store featuring product browsing, filtering, shopping cart functionality, and responsive design.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    githubUrl: "",
    demoUrl: "",
    status: "In Progress",
  },
];
