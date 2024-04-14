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
  description: "Italian sound artist, composer, performer and producer",
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
