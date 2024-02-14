import React, { type PropsWithChildren, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Container from "./Container";

export default function Section({
  children,
  className,
}: PropsWithChildren<HTMLAttributes<"section">>) {
  const defaultStyle =
    "w-full bg-transparent min-h-screen min-w-0 snap-start overflow-hidden";
  return (
    <section className={twMerge(defaultStyle, className)}>{children}</section>
  );
}
