import { PressContainer } from "@/components/pressContainer"
import { media2019, media2020 } from "@/lib/pressData"

export default function WhatsNew() {
  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1 className="text-center md:text-left">What&#39;s New</h1>
      <iframe className="mt-6 aspect-video w-full" src="https://www.youtube.com/embed/XdpnX41PNZk?si=aQuB25GH0h-U3Ugk" title="YouTube video player" allowFullScreen></iframe>
      <section className="mt-8">
        <h2>2020</h2>
        <hr />
        <PressContainer pressArr={media2020} />
      </section>
      <section className="mt-8">
        <h2>2019</h2>
        <hr />
        <PressContainer pressArr={media2019} />
      </section>
    </main>
  )
}