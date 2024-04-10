import Link from "next/link"
type Props = {
  project: { name: string, image: string, alt: string, href: string }
}

export function ProjectCard({ project }: Props) {
  return (
    <section className="w-full aspect-video relative mt-6">
      <Link href={project.href}>
        <img src={project.image} alt={project.alt} className="w-full h-full object-cover" />
        <h2 className="absolute bottom-3 right-5 text-white text-3xl hover:underline">{project.name} →</h2>
      </Link>
    </section>
  )
}