"use client"
import Link from "next/link"
import { useParams } from 'next/navigation'

type Props = {
  work: { name: string, image: string, alt: string, href: string }
}

export function WorkCard({ work }: Props) {
  const { locale } = useParams();

  return (
    <section className="w-1/4 relative mt-6">
      <Link href={`/${locale}/${work.href}`}>
        <img src={work.image} alt={work.alt} className="w-full aspect-square object-cover" />
        <h2 className="text-sm md:text-xl lg:text-2xl hover:underline mt-2">{work.name} →</h2>
      </Link>
    </section>
  )
}