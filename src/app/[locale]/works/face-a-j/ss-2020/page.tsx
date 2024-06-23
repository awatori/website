export const runtime = 'edge';

import { ImageSliderFull } from "@/components/imageSliderFull"
import { CreativesTextOnlyContainer } from "@/components/creativesTextOnlyContainer"
import { faceAJSS2020Creatives } from "@/lib/creativesData"
import { faceAJSS2020Tokyo, faceAJSS2020Lagos } from "@/lib/imagesData"
import { useTranslations } from "next-intl";

export default function SS2020() {
  const t = useTranslations("FACEAJSS2020");
  const t2 = useTranslations("Creatives");

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16">
      <h1 className="text-center md:text-left mb-4">Face A-J SS 2020</h1>
      <iframe className="mt-6 aspect-video w-full" src="https://www.youtube.com/embed/8-dDMcNV2yo?si=pD7wqHSWNLKfQR6z" title="YouTube video player" allowFullScreen></iframe>
      <section className="mt-8 items-center block overflow-hidden mb-10">
        <img src="/logos/face-a-j.png" alt="FACE A-J logo" className="w-32 float-left mx-6 mb-6 my-2" />
        <p>{t("description")}</p>
      </section>
      <section className="mt-4 flex flex-col md:flex-row justify-between gap-y-6">
        <div className="w-full md:w-[48%]">
          <h2 className="text-center md:text-left">{t("Tokyo")}</h2>
          <hr />
          <ImageSliderFull images={faceAJSS2020Tokyo} />
        </div>
        <div className="w-full md:w-[48%]">
          <h2 className="text-center md:text-left">{t("Lagos")}</h2>
          <hr />
          <ImageSliderFull images={faceAJSS2020Lagos} />
        </div>
      </section>
      <section className="mt-12 mb-24">
        <h1 className="text-center md:text-left">{t2("title")}</h1>
        <CreativesTextOnlyContainer creatives={faceAJSS2020Creatives} />
      </section>
    </main>
  )
}