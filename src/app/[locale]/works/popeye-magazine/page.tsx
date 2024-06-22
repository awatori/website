export const runtime = 'edge';

import { useTranslations } from "next-intl";

export default function PopeyeMagazine() {
  const t = useTranslations("Popeye");

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-screen">
      <h1 className="text-center md:text-left">POPEYE Magazine</h1>
      <p className="mt-4">{t("description")}</p>
      <embed src="/popeyeMagazine/popeye02_072-077.pdf" className="w-full h-[90lvh] mt-8" />
    </main>
  )
}