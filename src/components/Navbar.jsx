
"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#D8D5CA] bg-[#F4F1E8]/95 px-6 py-4 backdrop-blur-md md:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Navbar Header */}
        <div className="flex items-center justify-between gap-4">

          {/* Personal Name */}
          <a
            href="#home"
            className="whitespace-nowrap text-[15px] font-bold tracking-tight text-[#111111] sm:text-base lg:text-xl"
          >
            Muhammad Rizani Fakhrian
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-[#333333] transition-colors hover:text-[#A5A18F]"
              >
                {link.name}
              </a>
            ))}

          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-9 w-9 items-center justify-center border border-[#D8D5CA] text-xl text-[#111111] transition-colors hover:bg-[#EEEAE0] lg:hidden"
          >
            {isOpen ? "×" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="mt-4 grid grid-cols-2 gap-x-6 border-t border-[#D8D5CA] pt-3 lg:hidden"
          >

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#D8D5CA] py-4 text-xs font-medium uppercase tracking-wider text-[#333333] transition-colors hover:text-[#A5A18F]"
              >
                {link.name}
              </a>
            ))}

          </div>
        )}

      </div>

    </nav>
  );
}
