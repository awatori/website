// import Image from "next/image";
'use client'
export const runtime = 'edge';

import { useEffect } from "react";
import styles from "/src/styles/home.module.css";
import { profiles } from "@/lib/teamData";
import { ProfileCard } from "@/components/profileCard";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations("Home");

  useEffect(() => {
    const header = document.querySelector("#header");
    const headerLogo = document.querySelector("#header-logo");
    headerLogo!.classList.add("opacity-0");
    header!.classList.remove("bg-black");
    header!.classList.add("bg-transparent");

    window.addEventListener("scroll", checkScroll); // For animated logo

    return () => {
      window.removeEventListener("scroll", checkScroll);
      headerLogo!.classList.remove("opacity-0");
      header!.classList.add("bg-black");
      header!.classList.remove("bg-transparent");
    } // Cleanup
  }, [])

  function checkScroll() {
    const header = document.querySelector("#header");
    const logo = document.querySelector("#hero-logo") as HTMLElement;

    // Logo animation
    if (window.scrollY > 0) {
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
      <div className="absolute h-lvh w-lvw flex justify-center items-center">
        <img src="/logos/awatori_logo_white.png" alt="Awa'Tori logo in white" className="w-80 h-fit" id="hero-logo" />
      </div>
      <section className="h-lvh w-lvh">
        <img src="/placeholder_hero.png" alt="two models on a runway" className="h-full w-full object-cover" />
      </section>
      <section className="mx-14 md:mx-20 lg:mx-36 my-12">
        <h1 className="text-center md:text-left">{t("about-title")}</h1>
        <p className="mt-4 whitespace-pre-line">{t("about-description")} <br /><br />
        </p>
        <h1 className="mt-12 text-center md:text-left">{t("team")}</h1>
        <div className="flex flex-col mt-8 gap-6 mb-24">
          {profiles.map((profile) => (
            <ProfileCard key={profile.name} profile={profile} />
          ))}
        </div>
      </section>
    </main>
  );
}
