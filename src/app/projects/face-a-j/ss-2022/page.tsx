import { ImageSlider } from "@/components/imageSlider"
import { CreativesContainer } from "@/components/creativesContainer"
import { faceAJSS2022Creatives } from "@/lib/creativesData"
import { faceAJSS2022 } from "@/lib/imagesData"

export default function SS2022() {
  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16">
      <h1 className="text-center md:text-left">Face A-J SS 2022</h1>
      <iframe className="mt-6 aspect-video w-full" src="https://www.youtube.com/embed/XdpnX41PNZk?si=aQuB25GH0h-U3Ugk" title="YouTube video player" allowFullScreen></iframe>
      <section className="mt-6 flex flex-col items-center md:flex-none md:block">
        <img src="/logos/face-a-j.png" alt="FACE A-J logo" className="w-3/5 md:w-40 md:float-left mx-6 mb-10 md:my-2" />
        <p>
          <strong>About the event:</strong> <br />
          Maxhosa Africa X TokyoKnit <br /><br />
          The FACE A-J project that connects the African and Japanese creative industries will be showcasing the African luxury knitwear brand, MAXHOSA Africa, established by Laduma Ngxoloko and its collaborative collection with Tokyo Knit, a platform centered on knit fashion manufacturers, for the 2022 S/S collection during the Rakuten Tokyo Fashion Week. <br /><br />
          <strong>Location: </strong><br />
          Tokyo -  September 2021 <br />
          The event was held on the rooftop of Shibuya PARCO, followed by a 2 weeks FACE A-J Plus Pop-up in Shibuya Parco 1F.
        </p>
      </section>
      <section className="mt-8">
        <ImageSlider images={faceAJSS2022} />
      </section>
      <section className="mt-12">
        <h1 className="text-center md:text-left">The creatives</h1>
        <CreativesContainer creatives={faceAJSS2022Creatives} />
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