export const runtime = 'edge';
import { useTranslations } from "next-intl";

export default function CompanyOverview() {
  const t = useTranslations("Company");

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1>{t("title")}</h1>
      <hr />
      <section className="text-xs md:text-sm">
        <div className="flex gap-10 mt-8">
          <p className="font-bold w-1/3 md:w-1/4">{t("name")}</p>
          <p>Awa&#39;Tori</p>
        </div>
        <div className="flex gap-10 mt-8">
          <p className="font-bold w-1/3 md:w-1/4 shrink-0">{t("representative")}</p>
          <p className="whitespace-pre text-wrap">{t("bukky-seiko")}</p>
        </div>
        <div className="flex gap-10 mt-8 text-wrap">
          <p className="font-bold w-1/3 md:w-1/4 shrink-0">{t("address")}</p>
          <p className="whitespace-pre-wrap">{t("udagawa")}</p>
        </div>
        <div className="flex gap-10 mt-8">
          <p className="font-bold w-1/3 md:w-1/4">{t("established")}</p>
          <p>2019</p>
        </div>
        <div className="flex gap-10 mt-8">
          <p className="font-bold w-1/3 md:w-1/4">{t("capital")}</p>
          <p>200,000 JPY</p>
        </div>
      </section>
    </main>
  )
}