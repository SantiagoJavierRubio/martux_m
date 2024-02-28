import Image from "next/image";

export default function Home() {
  return (
    <div className="grid sm:grid-cols-2 gap-8 grid-rows-4 h-full grow">
      <div className="row-span-4 row-start-1 aspect-square relative overflow-hidden my-auto">
        <Image
          src="/profile1.jpg"
          fill
          objectFit="contain"
          alt="profile picture"
        />
      </div>
      <div className="row-span-2 row-start-3 h-60 mx-4 text-center">
        <h1 className="text-6xl font-extrabold">MARTUX_M</h1>
        <h2 className="my-2 text-xl">
          Maurizio Martusciello aka MARTUX_M is an italian sound artist,
          composer, performer and producer.
        </h2>
      </div>
    </div>
  );
}
