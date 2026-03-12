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
    <section>
      <div>
        <Image src={image} alt="" fill />
      </div>

      <div>
        <h1>{title}</h1>
        <h2>{dateReleased}</h2>
        <h2>{category}</h2>
      </div>
    </section>
  );
};

export default Moviecard;
