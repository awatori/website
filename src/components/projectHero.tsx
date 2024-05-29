type Props = {
  url: string;
  title: string;
  alt: string;
  description: string;
}

export function ProjectHero({ url, title, alt, description }: Props) {
  return (
    <figure className="h-lvh w-lvh relative mt-14">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-3/5 text-center">
        <h1>{title}</h1>
        <p className="mt-4 whitespace-pre-line text-lg">{description}</p>
      </div>
      <img src={url} alt={alt} className="h-full w-full object-cover" />
    </figure>
  )
}