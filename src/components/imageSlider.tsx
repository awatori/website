
"use client"
import { button } from "@material-tailwind/react";
import { useState } from "react";

type Props = {
  imgUrls: string[];
}

export function ImageSlider({ imgUrls }: Props) {
  const [imgIndex, setImgIndex] = useState<number>(0);

  function handlePrevOnClick() {
    setImgIndex((prev) => {
      if (prev === 0) return imgUrls.length - 1;
      return prev - 1;
    })
  }

  function handleNextOnClick() {
    setImgIndex((prev) => {
      if (prev === imgUrls.length - 1) return 0;
      return prev + 1;
    })
  }

  return (
    <section className="w-full relative text-white h-[70vh] mt-6">
      <div className="w-full h-full overflow-hidden flex">
        {imgUrls.map((url) => (
          <img src={url} key={url} className={`block min-w-full h-full object-cover translate-x-[${-100 * imgIndex}%] transition ease-in-out duration-300`} />
        ))}
      </div>
      <button onClick={handlePrevOnClick} className="absolute left-4 top-1/2"><span className="material-symbols-outlined">arrow_back_ios</span></button>
      <button onClick={handleNextOnClick} className="absolute right-3 top-1/2"><span className="material-symbols-outlined">arrow_forward_ios</span></button>
      <div className="absolute left-1/2 bottom-2 flex gap-2">
        {imgUrls.map((url, index) => (
          <button key={index} onClick={() => setImgIndex(index)}>
            {index === imgIndex ? <span className="material-symbols-outlined text-xs"> radio_button_checked</span> : <span className="material-symbols-outlined text-xs">radio_button_unchecked</span>}
          </button>
        ))}
      </div>
    </section>
  )
}