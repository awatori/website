import { PressContainer } from "@/components/pressContainer"
import { faceajss2020press, faceajss2021press } from "@/lib/pressData"

export default function WhatsNew() {
  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1 className="text-center md:text-left">What's New</h1>
      <iframe className="mt-6 aspect-video w-full" src="https://www.youtube.com/embed/0eA0s3H4aYE?si=fKgjVJpLaktIScoQ&amp;start=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <section className="mt-8">
        <h2>FACE A-J SS 2021</h2>
        <hr />
        <PressContainer pressArr={faceajss2021press} />
      </section>
      <section className="mt-8">
        <h2>FACE A-J SS 2020</h2>
        <hr />
        <PressContainer pressArr={faceajss2020press} />
      </section>
    </main>
  )
}