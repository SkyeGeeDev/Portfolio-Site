"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({x:-9999, y:-9999});
  const [clicked, setClicked] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-500 via-black to-black text-white">

      <div className="relative w-64 h-64 rounded-full overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseLeave={() => {
        setMousePos({ x: -9999, y: -9999 }); // move spotlight far away = hidden
      }}
      onClick ={() => setClicked(!clicked)}
      >
        {/* NFT Image (background) */}
        <Image
          src={clicked ? "/me.jpg" : "/nft.jpg"}
          alt="NFT image"
          fill
          className="object-cover"
        />

        {/* Profile Picture with hole following mouse */}
        <Image
          src={clicked ? "/nft.jpg" : "/me.jpg"}
          alt="Profile picture"
          fill
          className="object-cover"
          style={{
            WebkitMaskImage: `radial-gradient(circle 70px at ${mousePos.x}px ${mousePos.y}px, transparent 60%, black 100%)`,
            WebkitMaskRepeat: "no-repeat",
            maskImage: `radial-gradient(circle 70px at ${mousePos.x}px ${mousePos.y}px, transparent 60%, black 100%)`,
            maskRepeat: "no-repeat",
          }}

        />
      </div>

      {/* Welcome Text */}
      <h1 className="text-5xl font-bold mb-4 text-center">
        Welcome to ScottBui.dev
      </h1>
      <p className="text-xl text-center max-w-xl">
        Hi, I’m Scott! This is my personal website where I showcase my projects,
        skills, and learnings as I grow as a fullstack developer.
      </p>
    </section>
  );
}
