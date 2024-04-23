import Link from "next/link"
import { ProjectHero } from "@/components/projectHero"

export default function FaceAJ() {
  return (
    <>
      <ProjectHero url="/placeholder_hero.png" title="Fashion & Cultural Exchange Africa-Japan (FACE A-J)" alt="models on runway" />
      <main className="mx-14 md:mx-20 lg:mx-36 mb-16">
        <p className="mt-14">“Fashion is Change. Fashion can Change” <br /><br />
          FACE.A-J is a collective that showcases the culture and creativity from Africa and Japan, including an interactive fashion presentation, and panel discussions with the top names in the fashion and creative world. Fashion, Art, and Culture transcend politics and social conflicts, and inequalities. Through Fashion, Art, and Culture, FACE.A-J aims to create a platform that shows the true face of Africa and Japan, to bridge the gap between both creative markets, change misconceptions, and foster economic and cultural development.”
        </p>
        <div className="flex flex-col md:flex-row justify-between w-full my-14">
          <div className="flex flex-col w-full md:w-[49%]">
            <Link href="/projects/face-a-j/ss-2020">
              <img src="/faceajss2020/tokyo/COYOTE/9BC577D6-89CD-4C9A-B0CA-46AA3D62A27C.JPG" alt="placeholder image" className="w-full h-[60vh] object-cover" />
              <h2 className="mt-2 hover:underline">SS 2020 →</h2>
            </Link>
          </div>
          <div className="flex flex-col w-full md:w-[49%]">
            <Link href="/projects/face-a-j/ss-2021">
              <img src="/faceajss2021/faceajss2021_01.png" alt="placeholder image" className="w-full h-[60vh] object-cover" />
              <h2 className="mt-2 hover:underline">SS 2021 →</h2>
            </Link>
          </div>
        </div>
        <h1 className="text-center md:text-left">FACE A-J Production Team</h1>
        <hr />
        <p className="mt-6"><strong>Founder:</strong> AWA’TORI (Co-Founder) Bukky Adejobi / Seiko Mbako (Co-Founder) / Yuki Ochiai (Awa`Tori Brand Strategist) <br />
          <strong>Project Director:</strong> Hirofumi Kurino <br />
          <strong>Show Director:</strong> Shigetaka Kaneko <br />
          <strong>FACE.A-J Logo Design:</strong> Jun Takahashi <br />
          <strong>PR:</strong> Keitaro Nagasaka (Sakas PR) <br />
          <strong>Advisors:</strong> Akiko Shinoda (ITOCHU Corporation), Kaoru Imajo (Japan Fashion Week Organization)</p>
      </main>
    </>
  )
}