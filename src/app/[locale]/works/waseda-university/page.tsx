export const runtime = 'edge';

import { useTranslations } from "next-intl";
import { ImageSlider } from "@/components/imageSlider";
import { wasedaUniversity } from "@/lib/imagesData";

export default function PopeyeMagazine() {
  const t = useTranslations("Waseda");

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-screen">
      <h1 className="text-center md:text-left">{t("title")}</h1>
      <p className="mt-4">{t("description")}</p>
      <section className="w-full flex justify-center mt-8">
        <ImageSlider images={wasedaUniversity} />
      </section>
    </main>
  )
}