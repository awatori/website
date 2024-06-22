import { Logo } from "@/lib/sponsorsData";

type Props = {
  logos: Logo[];
}

export function LogosContainer({ logos }: Props) {
  return (
    <div className="flex w-full justify-center gap-x-16 gap-y-10 flex-wrap mt-10">
      {logos.map((logo) => (
        <img src={logo.path} alt={logo.alt} className="w-[15%] lg:w-[10%] object-contain aspect-square" key={logo.alt} />
      ))}
    </div>
  )
}