import React from "react";
import VisualItem from "./components/VisualItem";

export default function Visual() {
  return (
    <div className="flex flex-col grow p-8">
      <h1 className="text-5xl font-bold uppercase">
        Installations & digital art
      </h1>
      <div className="grow grid grid-flow-row sm:grid-cols-3 md:grid-cols-4 gap-3 p-2 my-6">
        <VisualItem name="Lorem Ipsum" id="Lorem" imgUrl="/eclipse1.jpg" />
        <VisualItem name="Other example" id="Ipsum" imgUrl="/eclipse1.jpg" />
        <VisualItem name="Third" id="Dolor" imgUrl="/profile1.jpg" />
        <VisualItem
          name="4"
          id="Lorem"
          imgUrl="https://scontent.cdninstagram.com/v/t51.2885-15/97254233_245431859861814_9173838008086950552_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTI0eDExMjQuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=0Vn9AqexCAkAX8cB5hd&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjMxMjQ1MTExMjQ2MDQzMTUyNQ%3D%3D.2-ccb7-5&oh=00_AfA5j_qDjxzlA4f0RJWNIBzY6dwUkJ2qJJa_Ng2z4DlpAg&oe=65D43D44&_nc_sid=10d13b"
        />
        <VisualItem name="Ejemplo numero 5" id="Ipsum" imgUrl="/eclipse1.jpg" />
        <VisualItem name="Six" id="Dolor" imgUrl="/eclipse1.jpg" />
      </div>
    </div>
  );
}
