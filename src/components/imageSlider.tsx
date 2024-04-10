
"use client"
import { useState } from "react";

type Props = {
  images: { url: string, alt: string }[];
}

export function ImageSlider({ images }: Props) {
  const [imgIndex, setImgIndex] = useState<number>(0);

  function handlePrevOnClick() {
    setImgIndex((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    })
  }

  function handleNextOnClick() {
    setImgIndex((prev) => {
      if (prev === images.length - 1) return 0;
      return prev + 1;
    })
  }

  return (
    <section className="w-full relative text-white aspect-video mt-6">
      <div className="w-full h-full overflow-hidden flex">
        {images.map((image) => (
          <img src={image.url} key={image.url} className={`block min-w-full h-full object-cover transition-all ease-in-out duration-300`} style={{ translate: `${-100 * imgIndex}%` }} alt={image.alt} />
        ))}
      </div>
      <button onClick={handlePrevOnClick} className="absolute left-4 top-1/2"><span className="material-symbols-outlined">arrow_back_ios</span></button>
      <button onClick={handleNextOnClick} className="absolute right-3 top-1/2"><span className="material-symbols-outlined">arrow_forward_ios</span></button>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2">
        {images.map((url, index) => (
          <button key={index} onClick={() => setImgIndex(index)}>
            {index === imgIndex ? <span className="material-symbols-outlined text-xs"> radio_button_checked</span> : <span className="material-symbols-outlined text-xs">radio_button_unchecked</span>}
          </button>
        ))}
      </div>
    </section>
  )
}