import { Karla, Arsenal } from "next/font/google";

export const karla = Karla({
  weight: '300',
  style: "normal",
  subsets: ["latin"]
});

export const arsenal = Arsenal({
  weight: '400',
  style: "normal",
  subsets: ["latin"],
  variable: "--font-arsenal"
});