import Link from "next/link";
export function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 py-5 text-white w-full bg-black px-14">
      <img src="/logos/awatori_logo_white.png" alt="Awa'Tori logo in white" className="w-16" />
      <nav className="flex justify-between gap-x-6 text-sm">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/our-creatives" className="hover:underline">Our Creatives</Link>
        <Link href="/contact-us" className="hover:underline">Contact Us</Link>
      </nav>
      <nav className="flex gap-3">
        <a href="https://www.youtube.com/channel/UCHCt0lehc9PLV7JS3Ytlkag/featured?view_as=subscriber" target="_blank"><img src="/youtube_icon.png" alt="YouTube icon" className="w-8" /></a>
        <a href="https://www.instagram.com/awatori.ourstory/" target="_blank"><img src="/instagram_icon.png" alt="YouTube icon" className="w-8" /></a>
      </nav>
    </footer>
  );
}