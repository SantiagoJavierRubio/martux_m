import React, { type PropsWithChildren } from "react";

export default function SectionContainer({ children }: PropsWithChildren) {
  return (
    <main className="snap-mandatory snap-always scroll-smooth h-screen w-screen overflow-y-scroll snap-y">
      {children}
    </main>
  );
}
