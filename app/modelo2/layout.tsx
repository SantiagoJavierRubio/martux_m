import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Modelo2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="bg-zinc-50 min-h-screen flex flex-col justify-stretch items-stretch pt-24">
        {children}
      </main>
      <Footer />
    </>
  );
}
