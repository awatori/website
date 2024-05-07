import { CreativesContainer } from "@/components/creativesContainer"
import { faceAJSS2020Creatives, faceAJSS2021Creatives, faceAJAW2021Creatives, faceAJSS2022Creatives } from "@/lib/creativesData"

export default function Projects() {
  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1>Our Creatives</h1>
      <section className="mt-6">
        <h2>FACE A-J SS 2020</h2>
        <hr />
        <CreativesContainer creatives={faceAJSS2020Creatives} />
      </section>
      <section className="mt-20">
        <h2>FACE A-J SS 2021</h2>
        <hr />
        <CreativesContainer creatives={faceAJSS2021Creatives} />
      </section>
      <section className="mt-20">
        <h2>FACE A-J AW 2021</h2>
        <hr />
        <CreativesContainer creatives={faceAJAW2021Creatives} />
      </section>
      <section className="mt-20">
        <h2>FACE A-J SS 2022</h2>
        <hr />
        <CreativesContainer creatives={faceAJSS2022Creatives} />
      </section>
    </main>
  )
}