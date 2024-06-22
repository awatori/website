"use client"
import Link from "next/link"
import { useParams } from 'next/navigation'
import { useTranslations } from "next-intl"

type Props = {
  work: { name: string, image: string, alt: string, href: string }
}

export function WorkCard({ work }: Props) {
  const t = useTranslations("Works");
  const { locale } = useParams();

  return (
    <section className="w-1/4 relative mt-6">
      <Link href={`/${locale}${work.href}`}>
        <img src={work.image} alt={work.alt} className="w-full aspect-square object-cover" />
        <h2 className="text-sm md:text-xl lg:text-2xl hover:underline mt-2">{t(work.name)} →</h2>
      </Link>
    </section>
  )
}