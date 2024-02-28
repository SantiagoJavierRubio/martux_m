import Image from "next/image";

export default function Home() {
  return (
    <div className="grid sm:grid-cols-2 gap-8 grid-rows-6 h-full max-h-lvh grow text-center">
      <div className="row-span-6 row-start-1 aspect-square max-h-full relative overflow-hidden my-auto">
        <Image
          src="/profile1.jpg"
          fill
          objectFit="contain"
          alt="profile picture"
        />
      </div>
      <h1 className="text-6xl row-span-1 row-start-3 font-extrabold">
        MARTUX_M
      </h1>
      <p className="text-xl row-span-2 row-start-4 px-8">
        MARTUX_M IS AN ITALIAN SOUND ARTIST, COMPOSER, PERFORMER, AND PRODUCER.
        HIS WORK EXPLORES THE REALMS OF ELECTRONIC MUSIC WITH A FOCUS ON
        INNOVATION AND EXPERIMENTATION, RESULTING IN UNIQUE SOUNDSCAPES AND A
        DIVERSE WORLD OF MUSICAL CREATIONS.
      </p>
    </div>
  );
}
