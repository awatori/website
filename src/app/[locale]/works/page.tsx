export const runtime = 'edge';

import { useTranslations } from "next-intl";

import { works } from "@/lib/worksData"
import { WorkCard } from "@/components/workCard"

export default function Projects() {
  const t = useTranslations("Menu");

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1>{t("works")}</h1>
      <section className="flex gap-[12%] mt-2">
        {works.map((work) => (
          <WorkCard key={work.name} work={work} />
        ))}
      </section>
    </main>
  )
}