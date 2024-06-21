export const runtime = 'edge';

import { CreativesTextOnlyContainer } from "@/components/creativesTextOnlyContainer"
import { faceAJSS2020Creatives, faceAJSS2021Creatives, faceAJAW2021Creatives, faceAJSS2022Creatives } from "@/lib/creativesData"
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Creatives");

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1>{t("our-creatives")}</h1>
      <section className="mt-6">
        <h2>FACE A-J SS 2020</h2>
        <hr />
        <CreativesTextOnlyContainer creatives={faceAJSS2020Creatives} />
      </section>
      <section className="mt-20">
        <h2>FACE A-J SS 2021</h2>
        <hr />
        <CreativesTextOnlyContainer creatives={faceAJSS2021Creatives} />
      </section>
      <section className="mt-20">
        <h2>FACE A-J AW 2021</h2>
        <hr />
        <CreativesTextOnlyContainer creatives={faceAJAW2021Creatives} />
      </section>
      <section className="mt-20">
        <h2>FACE A-J SS 2022</h2>
        <hr />
        <CreativesTextOnlyContainer creatives={faceAJSS2022Creatives} />
      </section>
    </main>
  )
}