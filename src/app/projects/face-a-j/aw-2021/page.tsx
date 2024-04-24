import { ImageSlider } from "@/components/imageSlider"
import { CreativesContainer } from "@/components/creativesContainer"
import { faceAJAW2021Creatives } from "@/lib/creativesData"
import { faceAJAW2021 } from "@/lib/imagesData"

export default function AW2021() {
  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16">
      <h1 className="text-center md:text-left">Face A-J AW 2021</h1>
      <iframe className="mt-6 aspect-video w-full" src="https://www.youtube.com/embed/qf4Q9rVVqVM?si=QZ45DRvkEEL_-dBQ" title="YouTube video player" allowFullScreen></iframe>
      <section className="mt-6 flex flex-col items-center md:flex-none md:block">
        <img src="/logos/face-a-j.png" alt="FACE A-J logo" className="w-3/5 md:w-40 md:float-left mx-6 mb-10 md:my-2" />
        <p>Tokyo-March 19th, 2021, Awa&#39;Tori hosted its third edition of the FACE A-J collaborative in partnership with the Japanese brand, Children of The Discordance. <br /><br />
          The show welcomed over (number) of guests who gathered at this year&#39;s venue, the Tokyo National Museum in Ueno - a venue worthy of the colorful and architectural designs walking down its halls. VIPS present included (names of VIPS), most of whom are avid fans of the brand. Some of these pieces designed by Hideki SHIKAMA, were made using African fabric sourced from Burkina Faso, keeping in line with Awa&#39;Tori&#39;s vision of promoting cultural exchange between Japan and African countries. <br /><br />
          A press conference will be held on March 26th (Friday) from 9pm at the United Arrows followed by an exhibition of some of the pieces showcased during Friday&#39;s show as well as others - this will be an opportunity for the media to discuss further with the designer, organizers as well as view and get an up and close view of the pieces.
        </p>
      </section>
      <section className="mt-8">
        <ImageSlider images={faceAJAW2021} />
      </section>
      <section className="mt-12">
        <h1 className="text-center md:text-left">The creatives</h1>
        <CreativesContainer creatives={faceAJAW2021Creatives} />
      </section>
      <section className="mt-12">
        <h1 className="text-center md:text-left">Sponsors</h1>
        <div className="flex w-full justify-center gap-4 flex-wrap mt-10">
          <img src="/logos/efi_logo.png" alt="Ethical Fashion Initiative logo" className="w-4/5 lg:w-2/5 object-contain" />
          <img src="/logos/united_arrows_logo.png" alt="United Arrows logo" className="w-4/5 lg:w-2/5 object-contain" />
        </div>
      </section>
    </main>
  )
}