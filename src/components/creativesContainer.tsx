"use client"
import { Creative } from "@/lib/creativesData";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
  creatives: Creative[];
}

export function CreativesContainer({ creatives }: Props) {
  const { locale } = useParams();

  return (
    <section className="flex flex-wrap gap-x-[4%] gap-y-8 mt-6 justify-center md:justify-normal">
      {creatives.map((creative => (
        <div className="flex flex-col w-[40%] md:w-[29%] lg:w-[22%] text-center text-sm" key={creative.name}>
          <Link href={`/${locale}${creative.url}`}>
            <img src={creative.image} alt={creative.alt} className="w-full aspect-square object-cover rounded-full" />
            <h2 className="text-sm md:text-xl mt-4">{creative.name}</h2>
            <h2 className="text-sm md:text-xl mt-1">{(creative.country !== "") ? `(${creative.country})` : null}</h2>
          </Link>
        </div>
      )))}
    </section>
  )
}