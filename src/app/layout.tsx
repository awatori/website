import type { Metadata } from "next";
import { Providers } from './providers';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
import "./globals.icons.css";
import { karla, arsenal } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Awa'Tori"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arsenal.variable} ${karla.className}`}>
        <link rel="icon" href="/logos/awatori_logo_black.png" sizes="any" />
        <Providers>
          {children}
          <Header />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
