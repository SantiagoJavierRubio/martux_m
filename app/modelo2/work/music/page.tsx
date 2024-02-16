import React from "react";
import MusicItem from "./components/MusicItem";

export default function Music() {
  return (
    <div className="flex flex-col grow p-8">
      <h1 className="text-5xl font-bold uppercase">Music</h1>
      <div className="grow p-6 flex flex-col items-stretch justify-stretch gap-6">
        <MusicItem
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
          imgUrl="/eclipse1.jpg"
          spotifyUrl="sadsdad"
          soundCloudUrl="sjdkasjdsa"
        />
        <MusicItem
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
          imgUrl="/profile1.jpg"
          spotifyUrl="sadsdad"
          soundCloudUrl="sjdkasjdsa"
        />
        <MusicItem
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
          imgUrl="https://scontent.cdninstagram.com/v/t51.2885-15/97254233_245431859861814_9173838008086950552_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTI0eDExMjQuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=0Vn9AqexCAkAX8cB5hd&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjMxMjQ1MTExMjQ2MDQzMTUyNQ%3D%3D.2-ccb7-5&oh=00_AfA5j_qDjxzlA4f0RJWNIBzY6dwUkJ2qJJa_Ng2z4DlpAg&oe=65D43D44&_nc_sid=10d13b"
          spotifyUrl="sadsdad"
        />
        <MusicItem
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
          imgUrl="/eclipse1.jpg"
          spotifyUrl="sadsdad"
        />
        <MusicItem
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
          imgUrl="/eclipse1.jpg"
          spotifyUrl="sadsdad"
        />
      </div>
    </div>
  );
}
