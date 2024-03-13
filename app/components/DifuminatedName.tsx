import React, { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles = "text-[2.8rem] text-white z-10 tracking-widest";

export function DifuminatedName({
  className,
  surroundingStyles,
  centerStyles,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & {
  surroundingStyles?: string;
  centerStyles?: string;
}) {
  const surrounding = twMerge("blur-[3.8px]", surroundingStyles);
  const center = twMerge(
    "text-8xl blur-[1px] font-light font-lato opacity-40",
    centerStyles
  );
  return (
    <h1 className={twMerge(defaultStyles, className)} {...props}>
      <span className={surrounding}>MARTU</span>
      <span className={center}>X</span>
      <span className={surrounding}>_M</span>
    </h1>
  );
}
