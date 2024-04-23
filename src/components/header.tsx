'use client'
import Link from "next/link";

import {
  Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure,
  Accordion, AccordionPanel, AccordionItem, AccordionButton, AccordionIcon
} from "@chakra-ui/react";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <header className="fixed top-0 flex justify-between items-center px-8 py-2 text-white w-full bg-black"
        id="header">
        <Link href="/" className="w-1/4">Language</Link>
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
                      <span className="text-lg">Home</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton className="flex justify-between w-100">
                    <Link href="/projects" className="text-lg" onClick={onClose}>
                      Projects
                    </Link>
                    <AccordionIcon />
                  </AccordionButton>

                </h2>
                <AccordionPanel>
                  <Link href="/projects/face-a-j" className="hover:underline ml-4" onClick={onClose}>Face A-J</Link>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href="/our-creatives" onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">Our Creatives</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href="https://awatori-shop.com/" target="_blank" onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">Shop</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href="/whats-new" onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">What's New</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href="/company-overview" onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">Company Overview</span>
                    </AccordionButton>
                  </Link>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <Link href="/contact-us" onClick={onClose}>
                    <AccordionButton className="flex justify-between w-100">
                      <span className="text-lg">Contact Us</span>
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