"use client"
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { socialMedias } from "@/lib/socialMediaData";

export function Footer() {
  const t = useTranslations("Menu");
  const { locale } = useParams();

  return (
    <footer className="flex flex-col px-8 py-5 text-white w-full bg-black px-14">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/3">
          <img src="/logos/awatori_logo_white.png" alt="Awa'Tori logo in white" className="w-16" />
        </div>
        <nav className="flex flex-col text-center md:flex-row md:text-left justify-center gap-x-6 text-sm w-1/3">
          <Link href="/" className="hover:underline mt-2 md:mt-0">{t("home")}</Link>
          <Link href={`/${locale}/works`} className="hover:underline mt-2 md:mt-0">{t("works")}</Link>
          <Link href={`/${locale}/contact-us`} className="hover:underline mt-2 md:mt-0">{t("contact")}</Link>
        </nav>
        <nav className="flex gap-3 mt-4 md:mt-0 md:w-1/3 justify-end">
          {socialMedias.map(media => (
            <a href={media.link} target="_blank" key={media.alt}><img src={media.iconWhite} alt={media.alt} className="w-8" key={media.alt} /></a>
          ))}
        </nav>
      </div>
      <h3 className="w-full text-center text-xs text-gray-600 mt-4">© Copyright 2020. All Rights Reserved.</h3>
    </footer>
  );
}