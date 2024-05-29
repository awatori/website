"use client"
export const runtime = 'edge';

import Link from "next/link"
import { ProjectHero } from "@/components/projectHero"
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function FaceAJ() {
  const t = useTranslations("FaceAJ");
  const { locale } = useParams();

  return (
    <>
      <ProjectHero url="/faceajss2022/L1010647.jpg" title={t("title")} alt="models on runway" description={t("description")} />
      <main className="mx-14 md:mx-20 lg:mx-36 mb-16">
        {/* <p className="mt-14">“Fashion is Change. Fashion can Change” <br /><br />
          FACE.A-J is a collective that showcases the culture and creativity from Africa and Japan, including an interactive fashion presentation, and panel discussions with the top names in the fashion and creative world. Fashion, Art, and Culture transcend politics and social conflicts, and inequalities. Through Fashion, Art, and Culture, FACE.A-J aims to create a platform that shows the true face of Africa and Japan, to bridge the gap between both creative markets, change misconceptions, and foster economic and cultural development.”
        </p> */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between w-full my-14">
          <div className="flex flex-col w-full md:w-[49%]">
            <Link href={`/${locale}/works/face-a-j/ss-2020`}>
              <img src="/faceajss2020/tokyo/COYOTE/9BC577D6-89CD-4C9A-B0CA-46AA3D62A27C.JPG" alt="placeholder image" className="w-full h-[60vh] object-cover" />
              <h2 className="mt-2 hover:underline mb-4">SS 2020 →</h2>
            </Link>
          </div>
          <div className="flex flex-col w-full md:w-[49%]">
            <Link href={`/${locale}/works/face-a-j/ss-2021`}>
              <img src="/faceajss2021/faceajss2021_01.png" alt="placeholder image" className="w-full h-[60vh] object-cover" />
              <h2 className="mt-2 hover:underline mb-4">SS 2021 →</h2>
            </Link>
          </div>
          <div className="flex flex-col w-full md:w-[49%]">
            <Link href={`/${locale}/works/face-a-j/aw-2021`}>
              <img src="/faceajaw2021/runway_00260_x.jpg" alt="placeholder image" className="w-full h-[60vh] object-cover" />
              <h2 className="mt-2 hover:underline mb-4">AW 2021 →</h2>
            </Link>
          </div>
          <div className="flex flex-col w-full md:w-[49%]">
            <Link href={`/${locale}/works/face-a-j/ss-2022`}>
              <img src="/faceajss2022/L1010681.jpg" alt="placeholder image" className="w-full h-[60vh] object-cover" />
              <h2 className="mt-2 hover:underline mb-4">SS 2022 →</h2>
            </Link>
          </div>
        </div>
        <h1 className="text-center md:text-left">{t("production")}</h1>
        <hr />
        <p className="mt-6"><strong>{t("founder")}</strong> {t("awatori-founders")} <br />
          <strong>{t("project-director")}</strong> {t("Hirofumi Kurino")} <br />
          <strong>{t("show-director")}</strong> {t("Shigetaka Kaneko")} <br />
          <strong>{t("logo")}</strong> {t("Jun Takahashi")} <br />
          <strong>{t("pr")}</strong> {t("Keitaro Nagasaka")} <br />
          <strong>{t("advisors")}</strong> {t("faceaj-advisors")}</p>
      </main>
    </>
  )
}