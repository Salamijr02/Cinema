import React from "react";
import { Card, CardTitle } from "./ui/card";
import Image from "next/image";

const Moviecard = ({ movie }) => {
  const {
    title,
    epilogue,
    dateReleased,
    category,
    type,
    actors,
    trailer,
    rating,
    keywords,
    kind,
    image,
  } = movie;
  return (
    <section className="border-2 rounded-lg p-4 flex flex-col gap-4 max-w-[260px] group w-full">
      <div className="relative h-[400px] w-full">
        <Image
          className="object-cover"
          src={image} alt="" fill />
      </div>

      <div className="absolute bottom-0 p-4 w-full">
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <div className="flex justify-between text-sm mt-1">
          <span>{dateReleased}</span>
          <span>{category}</span>
        </div>
      </div>
    </section>
  );
};

export default Moviecard;
