import Link from "next/link";
export function Footer() {
  return (
    <footer className="flex flex-col px-8 py-5 text-white w-full bg-black px-14">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img src="/logos/awatori_logo_white.png" alt="Awa'Tori logo in white" className="w-16" />
        <nav className="flex flex-col text-center md:flex-row md:text-left justify-between gap-x-6 text-sm">
          <Link href="/" className="hover:underline mt-2 md:mt-0">Home</Link>
          <Link href="/projects" className="hover:underline mt-2 md:mt-0">Projects</Link>
          <Link href="/our-creatives" className="hover:underline mt-2 md:mt-0">Our Creatives</Link>
          <Link href="/contact-us" className="hover:underline mt-2 md:mt-0">Contact Us</Link>
        </nav>
        <nav className="flex gap-3 mt-4 md:mt-0">
          <a href="https://www.youtube.com/channel/UCHCt0lehc9PLV7JS3Ytlkag/featured?view_as=subscriber" target="_blank"><img src="/icons/youtube_icon.png" alt="YouTube icon" className="w-8" /></a>
          <a href="https://www.instagram.com/awatori.ourstory/" target="_blank"><img src="/icons/instagram_icon.png" alt="YouTube icon" className="w-8" /></a>
        </nav>
      </div>
      <h3 className="w-full text-center text-xs text-gray-600 mt-4">© Copyright 2020. All Rights Reserved.</h3>
    </footer>
  );
}