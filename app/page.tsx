import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col max-w-2xl m-auto gap-8 items-center justify-center">
      {/* <div className="row-span-6 row-start-1 aspect-square max-h-full relative overflow-hidden my-auto">
        <Image
          src="/profile1.jpg"
          fill
          objectFit="contain"
          alt="profile picture"
        />
      </div> */}
      <h1 className="text-[2.8rem] text-gray-500 row-span-1 row-start-3">
        <span className="blur-[3.8px]">MARTU</span>
        <span className="text-8xl font-light font-lato">X</span>
        <span className="blur-[3.8px]">_M</span>
      </h1>
      <p className="text-xl row-span-2 row-start-4 px-8 leading-9">
        MARTUX_M IS AN ITALIAN SOUND ARTIST, COMPOSER, PERFORMER, AND PRODUCER.
        HIS WORK EXPLORES THE REALMS OF ELECTRONIC MUSIC WITH A FOCUS ON
        INNOVATION AND EXPERIMENTATION, RESULTING IN UNIQUE SOUNDSCAPES AND A
        DIVERSE WORLD OF MUSICAL CREATIONS.
      </p>
    </div>
  );
}
