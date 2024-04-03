import type { Metadata } from "next";
import { Providers } from './providers';
import { Header } from "@/components/header";
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
        <Providers>
          {children}
          <Header />
        </Providers>
      </body>
    </html>
  );
}
