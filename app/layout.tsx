import type { Metadata } from "next";
import { Lato, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const archivo = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Martux_M",
  description: "Official Site for Martux_m, an italian Sound Artist, Composer, Performer and Producer. See Martux's Music, Digital Arts and Installations. Know more about the artist and where to find him.",
  keywords: ["Sound artist", "Italian", "Music", "Martux", "Martux_m", "Martux m", "Maurizio Martusciello", "Artist", "Musician", "Martux_m Crew"],
  openGraph: {
    type: "website",
    description: "Official Site for Martux_m, an italian Sound Artist, Composer, Performer and Producer. See Martux's Music, Digital Arts and Installations. Know more about the artist and where to find him.",
    siteName: "Martux M",
    title: "Martux M",
    images: [
      {
        url: 'https://martux-m.vercel.app/logos/LogoMini.png',
        width: 500,
        height: 500
      }
    ]
  },
  verification: {
    google: "kx6Zf3nw_EU5pCwT_YrSS1cOpsG2FqUkL1nrm2sXlaM"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${archivo.variable}`}>
        <NavMenu className="lg:hidden" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
