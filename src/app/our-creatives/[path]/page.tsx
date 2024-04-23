import { creativesWithPages } from "@/lib/creativesData";
import { getCreativeByPath } from "@/lib/creativesData";
import { ImageSlider } from "@/components/imageSlider";
import Image from "next/image";

export const runtime = 'edge';

export async function generateStaticParams() {
  return creativesWithPages.map((creative) => ({
    path: creative.path
  }))
}

export default function Creative({ params }: {
  params: {
    path: string
  },
}) {

  const thisProfile = getCreativeByPath(params.path);

  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <section className="flex flex-col md:flex-row w-full mb-10">
        {(thisProfile!.pfp) ?
          <div className="relative w-full min-h-[50vh] max-h-[70vh] overflow-hidden md:w-1/3 md:max-h-[60vh] lg:max-h-[45vh]">
            <Image src={thisProfile!.pfp} className="object-cover object-top overflow-hidden" fill={true} alt={thisProfile!.name} />
          </div> : null
        }
        <div className="flex flex-col flex-1 mt-4 md:mt-0 md:ml-6">
          <h1 className="text-center md:text-left">{thisProfile!.name}</h1>
          <p className="mt-4 mb-6">{thisProfile!.description}</p>
          <div className="flex justify-center md:justify-start mt-auto gap-2">
            {(thisProfile!.instagram) ? <button><Image src="/icons/instagram_icon_black.png" alt="Instagram icon" width={40} height={40} /></button> : null}
            {(thisProfile!.website) ? <button><Image src="/icons/website_icon.png" alt="Website icon" width={40} height={40} /></button> : null}
          </div>
        </div>
      </section>
      <ImageSlider images={thisProfile!.images} />
    </main>
  )
}