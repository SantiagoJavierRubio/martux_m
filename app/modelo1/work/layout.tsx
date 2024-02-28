import React, { Suspense } from "react";
import Nav from "./components/Nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <section className="w-full min-h-screen h-full bg-zinc-950 flex py-4 flex-col gap-4 justify-start items-stretch text-white overflow-hidden">
        {children}
      </section>
    </>
  );
}
