import Image from "next/image";
import React, {useState, useEffect} from 'react';

interface TypewriterTextProps {
  fullText: string;
  speed?: number;
}

interface SpeechBubbleProps {
  text: string;
  className: 
}

function TypewriterText({ fullText, speed = 50 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      // Set a timer to add the next character after 'speed' milliseconds
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [fullText, index, speed]); // Re-run effect when fullText or index changes

  return <p className="text-sm text-gray-800">{displayedText}</p>;
}

// 1. Nested Component for the Speech Bubble (Modified for Horizontal Chat)
function SpeechBubble({ text, className = "" }: SpeechBubbleProps) {
  return (
    // The main bubble container: mr-4 for spacing from the image (on the left).
    
    <div className={`relative max-w-lg bg-white p-3 rounded-xl shadow-xl mr-4 mb-30 ${className}`}>
      
      <TypewriterText fullText={text} speed={60} /> 
      <button className="text-black bg-gray-500 rounded-2xl p-3 cursor-pointer m-4">Test</button>
      {/* The speech bubble tail, pointing RIGHT (toward the avatar) */}
      <div 
        className="absolute right-[-8px] top-8 h-4 w-4 bg-white transform rotate-45 border-t border-r z-10"
        aria-hidden="true" 
      ></div>
    </div>
  );
}


export default function HomeContent() {
  return(
    // 1. Main container: Relative, ready for absolute children.
    <div className="relative min-h-screen container mx-auto text-center">
      
      {/* 2. The Absolute Positioning Container (The Horizontal Chat Bar) */}
      <div 
        // absolute: Positions the container relative to the main page.
        // bottom-0 left-0 right-0: Stretches the container across the *entire* bottom of the screen.
        // flex items-end: Makes the children sit side-by-side (horizontally) and aligns them to the bottom.
        className="absolute bottom-0 left-0 right-0 flex items-end justify-end"
      >
        
        {/* The SpeechBubble component (Takes up most of the horizontal space) */}
        <SpeechBubble 
          text="This is where the dialogue and buttons will go for my portfolio website. Watch how the text starts to type when you first load the page!" 
          className="flex-grow max-w-xl" // Allows the bubble to grow and take up more width
        />

        {/* The Image (Avatar) (Positioned to the right of the bubble) */}
        <Image
          src="/nftt.jpg" // ⬅️ Replace with your image file name
          alt="Game character avatar"
          width={400} 
          height={400} 
          // mb-4: Added margin-bottom to lift it slightly off the very bottom edge.
          className="object-cover"
        />
      </div>
      
      {/* Optional: Your main page content with padding */}
      <div className="p-8">
        <p>Your main game/app content goes here.</p>
      </div>
      
    </div>
  )
};