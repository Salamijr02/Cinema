import React from "react";
import Image from "next/image";

const Moviecard = ({ movie }) => {
  const {
    title,
    dateReleased,
    category,
    image,
  } = movie;
  return (
    <section className="group relative w-full max-w-[260px] overflow-hidden rounded-xl bg-neutral-900 shadow-lg transition-transform duration-300 hover:scale-105">

      <div className="relative h-70 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

      </div>

      <div className="absolute bottom-0 p-4 text-white w-full">
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