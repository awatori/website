import { ImageSlider } from "@/components/imageSlider"
import { CreativesContainer } from "@/components/creativesContainer"
import { faceAJSS2021Creatives } from "@/lib/creativesData"
import { faceAJSS2021 } from "@/lib/imagesData"
import { LogosContainer } from "@/components/logosContainer"
import { faceajss2021sponsors } from "@/lib/sponsorsData"
import { faceajss2021media } from "@/lib/mediaEngagementData"

export default function SS2021() {
  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16">
      <h1 className="text-center md:text-left">Face A-J SS 2021 Tokyo</h1>
      <iframe className="mt-6 aspect-video w-full" src="https://www.youtube.com/embed/0eA0s3H4aYE?si=4fmv5IAHswb-hVZq" title="YouTube video player" allowFullScreen></iframe>
      <section className="mt-6 items-center block">
        <img src="/logos/face-a-j.png" alt="FACE A-J logo" className="w-32 md:w-40 float-left mx-6 mb-4 my-2" />
        <p>On October 17th, 2020 is the official date set aside for the second phase of AWA’TORI’s Face A-J event. To be held during the Rakuten Fashion week, this phase would be showcasing a pop-up shop event featuring Nigerian skateboarding and streetwear brand, Wafflesncream. <br /><br />

          The special Japan capsule collection, inspired by key aspects of both cultures, was designed by the Wafflesncream Family, directed by Jomi, and manufactured in Japan with the support of a Japanese designer, COGNOMEN by Gene Michael Oe. <br /><br />

          This event showcased an installation starting at 6:00pm, skateboarding, and a party at Pizza Slice 2, as well as pop-ups of the special Japan capsule collection- further details to follow. <br /><br />

          With the ongoing popularity and stable growth of street fashion and the skateboarding culture, it is a no-brainer that this would be yet another successful event.
          Shoes custom designed and provided by a Japanese shoe company would be used during this event and as part of an art installation, a pair would be painted on by both a Japanese skateboarding artist and a Nigerian painter who through his work aims to depict a futuristic image of Africa. <br /><br />

          In the spirit of a relaxed atmosphere, there will be Pizza and drinks. Guests are also welcome to visit one of the pop-ups next door, at United Arrows H Beauty & Youth where we will display some art pieces by the brand.</p>
      </section>
      <section className="mt-12">
        <ImageSlider images={faceAJSS2021} />
      </section>
      <section className="mt-12">
        <h1 className="text-center md:text-left">The designers</h1>
        <CreativesContainer creatives={faceAJSS2021Creatives} />
      </section>
      <section className="mt-12">
        <h1 className="text-center md:text-left">Sponsors</h1>
        <LogosContainer logos={faceajss2021sponsors} />
      </section>
      <section className="mt-12">
        <h1 className="text-center md:text-left">Media Engagement</h1>
        <LogosContainer logos={faceajss2021media} />
      </section>
    </main>
  )
}