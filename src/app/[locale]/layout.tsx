import type { Metadata } from "next";
import { Providers } from './providers';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "../globals.css";
import "../globals.icons.css";
import { karla, arsenal } from "@/lib/fonts";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Awa'Tori"
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${arsenal.variable} ${karla.className}`}>
        <link rel="icon" href="/logos/awatori_logo_black.png" sizes="any" />
        <NextIntlClientProvider messages={messages}>
          {children}
          <Header />
          <Footer />
        </NextIntlClientProvider>
        {/* <Providers>
          {children}
          <Header />
          <Footer />
        </Providers> */}
      </body>
    </html>
  );
}
