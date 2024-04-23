// import Image from "next/image";
'use client'
import { useEffect } from "react";
import styles from "../styles/home.module.css";
import { profiles } from "@/lib/teamData";
import { ProfileCard } from "@/components/profileCard";
import Image from "next/image";

export default function Home() {

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
        <h1 className="text-center md:text-left">About Us</h1>
        <p className="mt-4">Awa&#39;Tori meaning “Our Story” in Pidgin English (widely spoken language across anglophone African countries), and in Japanese, loosely translated as Awa – 合わせ meaning bringing several cultures together and Tori – 通り as in bridging the African and Japanese creative markets. <br /><br />
          Founded in 2018 by Bukky Adejobi and Seiko Mbako, Awa&#39;Tori is a platform that is passionate about the African and Japanese creative industry. We believe the creatives in the African and Asian markets have stories worth telling that are expressed in the form of fashion, arts, music, or film. Cut off from certain parts of the world, we believe it is our responsibility to help them tell their stories beyond their respective borders. <br /><br />
          With the overarching mission to contribute socioeconomic development in Africa and Japan, Bukky and Seiko, both of African descent, believe in the power of such a synergy. Through partnerships with stakeholders from the supply chain and collaborations with third part organizations, Awa&#39;Tori aims to develop and facilitate projects that foster sustainable partnerships that bridges the gap between the Creative Industries of Africa and Japan.
        </p>
        <h1 className="mt-12 text-center md:text-left">Our Team</h1>
        <div className="flex flex-col mt-8 gap-6 mb-24">
          {profiles.map((profile) => (
            <ProfileCard key={profile.name} profile={profile} />
          ))}
        </div>
      </section>
    </main>
  );
}
