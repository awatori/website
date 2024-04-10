type Props = {
  url: string;
  title: string;
  alt: string;
}

export function ProjectHero({ url, title, alt }: Props) {
  return (
    <figure className="h-lvh w-lvh relative">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-4/5 text-center">{title}</h1>
      <img src={url} alt={alt} className="h-full w-full object-cover" />
    </figure>
  )
}