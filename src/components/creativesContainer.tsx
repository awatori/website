import { Creative } from "@/lib/creativesData"

type Props = {
  creatives: Creative[];
}

export function CreativesContainer({ creatives }: Props) {
  return (
    <section className="flex flex-wrap gap-x-[4%] gap-y-8 mt-6 justify-center md:justify-normal">
      {creatives.map((creative => (
        <div className="flex flex-col w-9/12 md:w-[29%] lg:w-[22%] text-center text-sm">
          <img src={creative.image} alt={creative.alt} className="w-full aspect-square object-cover rounded-full" />
          <h2 className="mt-4">{creative.name}</h2>
          <h2 className="mt-1">({creative.country})</h2>
        </div>
      )))}
    </section>
  )
}