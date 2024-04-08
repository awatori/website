import { ImageSlider } from "@/components/imageSlider"

const imageUrls = ["/Seiko_Mbako.jpg", "/Bukky_Adejobi.jpg", "/placeholder_hero.png"];

export default function SS2020() {
  return (
    <main className="mx-24 mt-32 mb-16">
      <h1>Face A-J SS 2020</h1>
      <section className="mt-6">
        <img src="/face-a-j.png" alt="FACE A-J logo" className="w-40 float-left mx-6 my-2" />
        <p>In October 2019, FACE.A-J invited 5 of prominent luxury designers from Africa, 2 of which were nominated for the LVMH Prize, to showcase during Tokyo Fashion Week, along with 3 prominent designers from Japan. The founders of FACE.A-J, Awa’Tori, along with sponsors and partners, United Arrows, Tokyo Fashion Week, United Nation’s Ethical Fashion Initiative. This series will took place in both Tokyo and Lagos, the top Fashion centrals of both capitals. To ensure a truly collaborative partnership between designers, institutions, and retailers, for the African version, FACE.A-J will partnered with Lagos Fashion Week, the most prominent luxury fashion platform in Nigeria, and ALARA the top luxury select shop in Africa.</p>
      </section>
      <h2 className="mt-8">Tokyo</h2>
      <hr />
      <ImageSlider imgUrls={imageUrls} />
    </main>
  )
}