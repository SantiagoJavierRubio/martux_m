import React from "react";
import Menu from "./components/Menu";

export default function Modelo1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Menu />
      {children}
    </main>
  );
}
