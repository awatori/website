"use client"
import { Press } from "@/lib/pressData";
import { useState } from "react";
import Link from "next/link";

type Props = {
  pressArr: Press[];
}

export function PressContainer({ pressArr }: Props) {
  const [imgIndex, setImgIndex] = useState<number>(0);

  function handlePrevOnClick() {
    console.log("Index before:", imgIndex);
    setImgIndex((prev) => {
      if (prev === 0) return Math.ceil(pressArr.length / 4) - 1;
      return prev - 1;
    })
    console.log("Index after:", imgIndex);
  }

  function handleNextOnClick() {
    console.log("Index before:", imgIndex);
    setImgIndex((prev) => {
      if (prev === Math.ceil(pressArr.length / 4) - 1) return 0;
      return prev + 1;
    })
    console.log("Index after:", imgIndex);
  }

  return (
    <article className="flex 0 w-full overflow-hidden gap-x-[2%] mt-4 relative">
      {pressArr.map((press) => (
        <div className="w-1/5 h-40 relative shrink-0 transition-all ease-in-out duration-300" key={press.title} style={{ translate: `${-440 * imgIndex}%` }}>
          <Link href={press.link}>
            <img src={press.thumbnail} alt="" className="h-full w-full object-cover" />
            <div className="flex absolute top-0 right-0 h-full w-full p-4 opacity-0 hover:opacity-100 text-white bg-black/50">
              <p className="self-end">{press.title}</p>
            </div>
          </Link>
        </div>
      ))}
      {pressArr.length > 4 ? <button onClick={handlePrevOnClick} className="absolute top-0 left-0 h-full object-contain pl-2 bg-black/50 text-white opacity-0 hover:opacity-100"><span className="material-symbols-outlined">arrow_back_ios</span></button> : null}
      {pressArr.length > 4 ? <button onClick={handleNextOnClick} className="absolute top-0 right-0 h-full object-contain pr-2 bg-black/50 text-white opacity-0 hover:opacity-100"><span className="material-symbols-outlined">arrow_forward_ios</span></button> : null}
    </article >
  )
}