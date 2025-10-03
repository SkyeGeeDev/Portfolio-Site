"use client";

import Image from "next/image";
import { useState } from "react";
import HomeContent from "./components/homecontent"
// --- Placeholder Components (Keep these outside the main component) ---



// ---------------------------------------------------

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [clicked, setClicked] = useState(false);
  
  // New State: Controls the opacity of the splash screen
  const [isFadingOut, setIsFadingOut] = useState(false);

  // New State: Controls whether the main content is fully visible (after transition)
  const [isMainVisible, setIsMainVisible] = useState(false);

  // Define the duration for the fade transition (in milliseconds)
  const TRANSITION_DURATION = 100; 

  const handleEnterClick = () => {
    // 1. Start the fade-out animation for the splash screen
    setIsFadingOut(true);
    
    // 2. After the fade-out time, switch to the main content
    setTimeout(() => {
      setClicked(true);
      // Optional: Set main content to visible to trigger its fade-in 
      // (though just rendering it with a transition class works too)
      setIsMainVisible(true);
    }, TRANSITION_DURATION);
  };

  // --- Conditional Rendering for Main Content ---
  if (clicked) {
    return (
      <section 
        className={`min-h-screen bg-[#c42d40] text-white transition-opacity duration-1000 ${
          isMainVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HomeContent />
      </section>
    );
  }

  // --- Initial Spotlight View (Splash Screen) ---
  return (
    <section 
      className={`flex flex-col items-center justify-center min-h-screen bg-[#001528] text-white 
        transition-opacity ease-out duration-[${TRANSITION_DURATION}ms] 
        ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div
        className="relative w-64 h-64 rounded-full overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
        onMouseLeave={() => {
          setMousePos({ x: -9999, y: -9999 }); 
        }}
        onClick={handleEnterClick} // Use the new handler
      >
        {/* NFT Image (background) */}
        <Image
          src={"/nft.jpg"}
          alt="NFT image background"
          fill
          className="object-cover"
        />

        {/* Profile Picture with hole following mouse (The mask layer) */}
        <Image
          src={"/me.jpg"}
          alt="Profile picture (Click to reveal portfolio)"
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
      <p className="mt-6 text-lg tracking-widest animate-pulse">
        Click to Enter SkyeGee's Garden
      </p>
    </section>
  );
}