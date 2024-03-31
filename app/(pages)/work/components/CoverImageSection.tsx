import React, { type HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";

type CoverImageSectionProps = {
  imgSource: string | StaticImport;
  imgAltText: string;
  imgStyles?: string;
  title: string;
  imgSizes: {
    width: number;
    height: number;
  };
} & HTMLAttributes<HTMLDivElement>;

const defaultStyles = "flex flex-col grow p-8 pt-16 bg-zinc-100 z-10";

export function CoverImageSection({
  imgSource,
  imgAltText,
  imgSizes,
  imgStyles,
  title,
  children,
  className,
  ...props
}: CoverImageSectionProps) {
  return (
    <>
      <div className="bg-black w-full max-w-screen overflow-hidden max-h-screen h-screen relative">
        <Link href="#content" className="fixed inset-0 z-0">
          <Image
            src={imgSource}
            alt={imgAltText}
            width={imgSizes.width}
            height={imgSizes.height}
            placeholder="blur"
            className={twMerge(
              "object-cover object-center w-full h-full",
              imgStyles
            )}
          />
          <div className="fixed inset-0 h-full bg-black/50 flex items-center justify-center text-center">
            <h1 className="text-8xl font-semibold tracking-[1rem] text-zinc-50 uppercase">
              {title}
            </h1>
          </div>
        </Link>
      </div>
      <section
        id="content"
        className={twMerge(defaultStyles, className)}
        {...props}
      >
        {children}
      </section>
    </>
  );
}
