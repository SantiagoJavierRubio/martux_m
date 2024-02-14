import React, { type HTMLAttributes, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function Container({
  children,
  className,
}: PropsWithChildren<HTMLAttributes<"main">>) {
  const defaultStyle =
    "w-full min-w-0 max-w-4xl m-auto relative min-h-screen flex-col items-center justify-center text-center";
  return <main className={twMerge(defaultStyle, className)}>{children}</main>;
}
