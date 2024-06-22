export const runtime = 'edge';

import { ImageSlider } from "@/components/imageSlider"
import { CreativesTextOnlyContainer } from "@/components/creativesTextOnlyContainer"
import { faceAJSS2021Creatives } from "@/lib/creativesData"
import { faceAJSS2021 } from "@/lib/imagesData"
import { LogosContainer } from "@/components/logosContainer"
import { faceajss2021sponsors } from "@/lib/sponsorsData"
import { faceajss2021media } from "@/lib/mediaEngagementData"
import { useTranslations } from "next-intl";

export default function SS2021() {
  const t = useTranslations("FACEAJSS2021")
  const t2 = useTranslations("Creatives");

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16">
      <h1 className="text-center md:text-left">Face A-J SS 2021 Tokyo</h1>
      <iframe className="mt-6 aspect-video w-full" src="https://www.youtube.com/embed/0eA0s3H4aYE?si=4fmv5IAHswb-hVZq" title="YouTube video player" allowFullScreen></iframe>
      <section className="mt-10 items-center block overflow-hidden">
        <img src="/logos/face-a-j.png" alt="FACE A-J logo" className="w-32 float-left mx-6 my-2" />
        <p>{t("description")}</p>
      </section>
      <section className="mt-10 flex justify-center">
        <ImageSlider images={faceAJSS2021} />
      </section>
      <section className="mt-12">
        <h1 className="text-center md:text-left">{t2("title")}</h1>
        <CreativesTextOnlyContainer creatives={faceAJSS2021Creatives} />
      </section>
      {/* <section className="mt-12">
        <h1 className="text-center md:text-left">Sponsors</h1>
        <LogosContainer logos={faceajss2021sponsors} />
      </section>
      <section className="mt-12">
        <h1 className="text-center md:text-left">Media Engagement</h1>
        <LogosContainer logos={faceajss2021media} />
      </section> */}
    </main>
  )
}