import { Logo } from "@/lib/sponsorsData";

type Props = {
  logos: Logo[];
}

export function LogosContainer({ logos }: Props) {
  return (
    <div className="flex w-full justify-center gap-x-16 gap-y-10 flex-wrap mt-10">
      {logos.map((logo) => (
        <img src={logo.path} alt={logo.alt} className="w-2/5 lg:w-[15%] object-contain" key={logo.alt} />
      ))}
    </div>
  )
}