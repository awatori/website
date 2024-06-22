"use client"
export const runtime = 'edge';

import Link from "next/link"
import { ProjectHero } from "@/components/projectHero"
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { FaceAJData } from "@/lib/faceAjData";
import { LogosContainer } from "@/components/logosContainer";
import { faceajsponsors } from "@/lib/sponsorsData";

export default function FaceAJ() {
  const t = useTranslations("FaceAJ");
  const { locale } = useParams();

  return (
    <>
      <ProjectHero url="/faceajss2022/L1010647.jpg" title={t("title")} alt="models on runway" description={t("description")} />
      <main className="mx-14 md:mx-20 lg:mx-36 mb-16">
        <section className="flex flex-wrap justify-around mt-24 gap-y-6">
          {
            FaceAJData.map(show => (
              <div className="flex w-[45%]  md:w-[20%] lg:w-[15%] aspect-square bg-black rounded-full justify-center items-center text-white" key={show.title}>
                <Link href={`/${locale}${show.href}`}>
                  <h2 className="mt-2 hover:underline mb-4 text-xl lg:text-2xl">{show.title} →</h2>
                </Link>
              </div>
            ))
          }
        </section>
        <section className="mt-24">
          <h1 className="text-center md:text-left">{t("partners-sponsors")}</h1>
          <hr />
          <LogosContainer logos={faceajsponsors} />
        </section>
        <section className="mt-16">
          <h1 className="text-center md:text-left">{t("production")}</h1>
          <hr />
          <p className="mt-6"><strong>{t("founder")}</strong> {t("awatori-founders")} <br />
            <strong>{t("project-director")}</strong> {t("Hirofumi Kurino")} <br />
            <strong>{t("show-director")}</strong> {t("Shigetaka Kaneko")} <br />
            <strong>{t("logo")}</strong> {t("Jun Takahashi")} <br />
            <strong>{t("pr")}</strong> {t("Keitaro Nagasaka")} <br />
            <strong>{t("advisors")}</strong> {t("faceaj-advisors")}</p>
        </section>

      </main>
    </>
  )
}