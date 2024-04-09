import { projects } from "@/lib/projectsData"
import { ProjectCard } from "@/components/projectCard"

export default function Projects() {
  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </main>
  )
}