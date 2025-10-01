"use client"; // if you’re using the App Router

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-none border-none fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-1">
            <Link href="/" className="text-2xl font-bold text-white hover:text-black transition-colors duration-500">
                ScottBui.dev
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link href="/about" className="px-3 py-2 rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-500">
              About
            </Link>
            <Link href="/projects" className="px-3 py-2 rounded-lg text-white hover:bg-white hover:text-black transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="px-3 py-2 rounded-lg text-white hover:bg-white hover:text-black transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-lg text-white hover:bg-white hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          {/* Right: (empty for now, can add icons/buttons later) */}
          <div className="flex-1 flex justify-end">
            {/* Example placeholder */}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}