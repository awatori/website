// import Image from "next/image";
'use client'
import { useEffect } from "react";
import styles from "../styles/home.module.css";

export default function Home() {

  useEffect(() => {
    const header = document.querySelector("#header");
    header!.classList.remove("bg-black");
    header!.classList.add("bg-transparent");

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, [])

  function checkScroll() {
    const header = document.querySelector("#header");
    const logo = document.querySelector("#header-logo") as HTMLElement;

    if (window.scrollY > 5) {
      header!.classList.remove("bg-transparent");
      header!.classList.add("bg-black");
      logo!.classList.remove(styles["header-to-hero"]);
      logo!.offsetHeight; // trigger reflow to reset animation
      logo!.classList.add(styles["hero-to-header"]);
    } else {
      header!.classList.remove("bg-black");
      header!.classList.add("bg-transparent");
      logo!.classList.remove(styles["hero-to-header"]);
      logo!.offsetHeight; // trigger reflow to reset animation
      logo!.classList.add(styles["header-to-hero"]);
    }
  }

  return (
    <main className="relative">
      <div className="absolute h-full w-full flex justify-center items-center">
        <img src="/awatori_logo_white.png" alt="awatori logo in white" className="w-96 h-fit" id="header-logo" />
      </div>
      <section className="h-lvh w-lvh">
        <img src="/placeholder_hero.png" alt="two models on a runway" className="h-full w-full object-cover" />
      </section>
      <section>
        <p>stuff</p>
      </section>
    </main>
  );
}
