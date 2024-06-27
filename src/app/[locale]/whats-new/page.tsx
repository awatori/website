export const runtime = 'edge';

import { PressContainer } from "@/components/pressContainer"
import { media } from "@/lib/pressData"
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function WhatsNew() {
  const t = useTranslations("Menu");

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1 className="text-center md:text-left">{t("whats-new")}</h1>
      <section className="w-full h-[65vh] relative mt-6">
        <Link href="https://ecnomikata.com/ecnews/40528/" target="_blank">
          <img src="/press/40528_thumbnail_main2.png" alt="FACE-AJ Logo in white on black background" className="h-full w-full object-cover" />
          <div className="flex absolute top-0 right-0 h-full w-full p-4 opacity-0 hover:opacity-100 text-white bg-black/50">
            <p className="max-h-full max-w-full self-end text-wrap overflow-scroll text-lg md:text-3xl">楽天ファッションウィークで話題、アフリカ製品を販売するAwa’Toriに聞くSDGs商品を提供する上での課題 →</p>
          </div>
        </Link>
      </section>
      <section className="mt-8">
        <hr />
        <PressContainer pressArr={media} />
      </section>
    </main>
  )
}