'use client'
import Link from "next/link";
import { useParams, usePathname, useRouter } from 'next/navigation'
import {
  Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure,
  Accordion, AccordionPanel, AccordionItem, AccordionButton, AccordionIcon
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { locale } = useParams();
  const router = useRouter()
  const pathname = usePathname();

  const t = useTranslations("Menu");

  function onClick() {
    const newLocale = locale === "en" ? "ja" : "en";
    const newPath = pathname.slice(3);
    router.push(`/${newLocale}${newPath}`, { scroll: false });
  }

  return (
    <>
      <header className="fixed top-0 flex justify-between items-center px-8 py-2 text-white w-full bg-black"
        id="header">
        <button className="w-1/4 text-left" onClick={onClick}>{locale === "en" ? "🇯🇵 日本語" : "🇬🇧 English"}</button>
        <div className="w-1/4 flex justify-center">
          <Link href="/"><img src="/logos/awatori_logo_white.png" alt="Awa'Tori logo in white" className="w-16 my-1" id="header-logo" /></Link>
        </div>
        <div className="flex w-1/4 justify-end">
          <button onClick={onOpen}><span className="material-symbols-outlined">menu</span></button>
        </div>
      </header>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Accordion allowToggle >
              <AccordionItem>
                <h2>
                  <Link href="/" onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">{t("home")}</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton className="flex justify-between w-100">
                    <Link href={`/${locale}/works`} className="text-lg" onClick={onClose}>
                      {t("works")}
                    </Link>
                    <AccordionIcon />
                  </AccordionButton>

                </h2>
                <AccordionPanel>
                  <Link href={`/${locale}/projects/face-a-j`} className="hover:underline ml-4" onClick={onClose}>Face A-J</Link>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href={`/${locale}/our-creatives`} onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">{t("creatives")}</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href="https://awatori-shop.com/" target="_blank" onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">{t("shop")}</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href={`/${locale}/whats-new`} onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">{t("whats-new")}</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href={`/${locale}/company-overview`} onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">{t("company-overview")}</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href={`/${locale}/contact-us`} onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">{t("contact")}</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer >
    </>
  )
}