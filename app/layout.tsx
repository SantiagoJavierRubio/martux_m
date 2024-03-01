import type { Metadata } from "next";
import { Rubik, Orbitron } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
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
      <body className={`${rubik.variable} ${orbitron.variable}`}>
        <NavBar />
        <main className="bg-zinc-50 min-h-screen flex flex-col justify-stretch items-stretch pt-24 font-rubik">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
