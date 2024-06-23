export const runtime = 'edge';

import { ImageSlider } from "@/components/imageSlider"
import { CreativesTextOnlyContainer } from "@/components/creativesTextOnlyContainer"
import { faceAJAW2021Creatives } from "@/lib/creativesData"
import { faceAJAW2021 } from "@/lib/imagesData"
import { useTranslations } from "next-intl";

export default function AW2021() {
  const t = useTranslations("FACEAJAW2021");
  const t2 = useTranslations("Creatives");

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16">
      <h1 className="text-center md:text-left">Face A-J AW 2021</h1>
      <iframe className="mt-6 aspect-video w-full" src="https://www.youtube.com/embed/qf4Q9rVVqVM?si=QZ45DRvkEEL_-dBQ" title="YouTube video player" allowFullScreen></iframe>
      <section className="mt-6 items-center block overflow-hidden">
        <img src="/logos/face-a-j.png" alt="FACE A-J logo" className="w-32 float-left mx-6 mb-8 my-2" />
        <p className="whitespace-pre-line">{t("description")}
        </p>
      </section>
      <section className="mt-8 w-full flex justify-center">
        <ImageSlider images={faceAJAW2021} />
      </section>
      <section className="mt-12">
        <h1 className="text-center md:text-left">{t2("title-single")}</h1>
        <CreativesTextOnlyContainer creatives={faceAJAW2021Creatives} />
      </section>
    </main>
  )
}