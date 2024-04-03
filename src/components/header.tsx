'use client'
import Link from "next/link";
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef()

  return (
    <>
      <header className="fixed top-0 flex justify-between items-center px-8 py-5 text-white w-full bg-black"
        id="header">
        <Link href="/">Language</Link>
        <button onClick={onOpen}><span className="material-symbols-outlined">menu</span></button>
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
            Please
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}