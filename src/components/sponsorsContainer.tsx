import { Sponsor } from "@/lib/sponsortsData";

type Props = {
  sponsors: Sponsor[];
}

export function SponsorsContainer({ sponsors }: Props) {
  return (
    <div className="flex w-full justify-center gap-10 flex-wrap mt-10">
      {sponsors.map((sponsor) => (
        <img src={sponsor.path} alt={sponsor.alt} className="w-2/5 lg:w-[15%] object-contain" key={sponsor.alt} />
      ))}
    </div>
  )
}