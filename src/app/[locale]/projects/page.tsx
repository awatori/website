export const runtime = 'edge';

import { projects } from "@/lib/projectsData"
import { ProjectCard } from "@/components/projectCard"
import { mediaPartnerships } from "@/lib/mediaPartnershipsData"

export default function Projects() {
  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
      <h1 className="mt-10">Media Partnerships</h1>
      {mediaPartnerships.map((media) => (
        <ProjectCard key={media.name} project={media} />
      ))}
    </main>
  )
}