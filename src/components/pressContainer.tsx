"use client"
import { Press } from "@/lib/pressData";
import { useState, useEffect } from "react";
import Link from "next/link";

type Props = {
  pressArr: Press[];
}

export function PressContainer({ pressArr }: Props) {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [isTouchScreen, setIsTouchScreen] = useState<boolean>(false);
  const [maxCount, setMaxCount] = useState<number>(4);

  useEffect(() => {
    if (window.visualViewport?.width && window.visualViewport?.width < 600) {
      setMaxCount(1);
    }

    window.addEventListener("resize", checkWindowSize);

    if (is_touch_enabled()) setIsTouchScreen(true);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    }
  }, []);

  function is_touch_enabled() {
    return ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0);
  }

  function checkWindowSize() {
    if (window.visualViewport?.width && window.visualViewport?.width < 600) {
      setMaxCount(1);
    } else {
      setMaxCount(4);
    }
  }

  function handlePrevOnClick() {
    setImgIndex((prev) => {
      if (prev === 0) return Math.ceil(pressArr.length / maxCount) - 1;
      return prev - 1;
    })
  }

  function handleNextOnClick() {
    setImgIndex((prev) => {
      if (prev === Math.ceil(pressArr.length / maxCount) - 1) return 0;
      return prev + 1;
    })
  }

  return (
    <article className={`flex 0 w-full ${isTouchScreen ? "overflow-scroll" : "overflow-hidden"} gap-x-[2%] mt-4 relative`}>
      {pressArr.map((press) => (
        <div className={`${maxCount === 1 ? "w-[80%]" : "w-1/5"} h-40 relative shrink-0 transition-all ease-in-out duration-300`} key={press.title} style={{ translate: `${(maxCount === 1 ? -102 : -440) * imgIndex}%` }}>
          <Link href={press.link} target="_blank">
            <img src={press.thumbnail} alt="" className="h-full w-full object-cover" />
            <div className={`flex absolute top-0 right-0 h-full w-full p-4 ${isTouchScreen ? "opacity-100" : "opacity-0"} hover:opacity-100 text-white bg-black/50`}>
              <p className="max-h-full max-w-full self-end text-wrap overflow-scroll">{press.title}</p>
            </div>
          </Link>
        </div>
      ))}
      {!isTouchScreen && pressArr.length > maxCount ? <button onClick={handlePrevOnClick} className={`absolute top-0 left-0 h-full object-contain pl-2 bg-black/50 text-white opacity-0 hover:opacity-100`}><span className="material-symbols-outlined">arrow_back_ios</span></button> : null}
      {!isTouchScreen && pressArr.length > maxCount ? <button onClick={handleNextOnClick} className={`absolute top-0 right-0 h-full object-contain pl-2 bg-black/50 text-white opacity-0 hover:opacity-100`}><span className="material-symbols-outlined">arrow_forward_ios</span></button> : null}
    </article >
  )
}