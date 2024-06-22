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
        <Link href="https://www.fashionsnap.com/collection/face-a-j/2022ss/" target="_blank">
          <img src="/faceajss2022/DSC06543.jpg" alt="FACE-AJ SS2022 Photoshoot" className="h-full w-full object-cover" />
          <div className="flex absolute top-0 right-0 h-full w-full p-4 opacity-0 hover:opacity-100 text-white bg-black/50">
            <p className="max-h-full max-w-full self-end text-wrap overflow-scroll text-lg md:text-3xl">FACE A-J 2022年春夏コレクション →</p>
          </div>
        </Link>
      </section>
      {/* <iframe className="mt-6 aspect-video w-full" src="https://www.youtube.com/embed/XdpnX41PNZk?si=aQuB25GH0h-U3Ugk" title="YouTube video player" allowFullScreen></iframe> */}
      <section className="mt-8">
        <hr />
        <PressContainer pressArr={media} />
      </section>
    </main>
  )
}