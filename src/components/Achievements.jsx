"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const achievements = [
  {
    id: 1,
    image: "/images/achievements/pengurus.webp",
    aspect: "aspect-[3/4]",
    title: "Piagam Pengurus UKM Taekwondo Universitas Brawijaya",
    year: "2023",
  },
  {
    id: 2,
    image: "/images/achievements/taekwondo.jpeg",
    aspect: "aspect-[4/3]",
    title: "Piagam Kejuaraan Tingkat Provinsi Taekwondo Indonesia Jawa Timur",
    year: "2023",
  },
  {
    id: 3,
    image: "/images/achievements/spab.jpeg",
    aspect: "aspect-[4/3]",
    title: "Sertifikat Panitia Acara SPAB Taekwondo Universitas Brawijaya",
    year: "2023",
  },
  {
    id: 4,
    image: "/images/achievements/bnsp.webp",
    aspect: "aspect-[3/4]",
    title: "Sertifikat Kompetensi Junior Web Developer",
    year: "2025",
  },
  {
    id: 5,
    image: "/images/achievements/toefl.webp",
    aspect: "aspect-[4/3]",
    title: "Sertifikat Toefl",
    year: "2025",
  },
];

export default function Achievements() {

  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // Handle Escape key and prevent background scrolling
  useEffect(() => {
    if (!selectedAchievement) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedAchievement(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAchievement]);

  
return (
  <section
    id="achievements"
    className="bg-[#F4F1E8] px-6 py-24 md:px-12 lg:px-16"
  >
    <div className="mx-auto max-w-7xl">

      {/* Section Metadata */}
      <div className="flex justify-between border-b border-[#D8D5CA] pb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777366]">
        <span>06 / Achievements</span>
        <span>Certificates & Awards</span>
      </div>

      {/* Section Heading */}
      <div className="mt-12 md:mt-16">

        <h2 className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-[#111111] md:text-7xl">
          Achievements.
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#555044] md:text-base">
          A collection of certificates, awards, and achievements throughout my journey.
        </p>

      </div>

      {/* Achievement Gallery */}
      <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

        {achievements.map((item) => (
          <article
            key={item.id}
            className="group min-w-0"
          >

            {/* Certificate Image */}
            <button
              type="button"
              onClick={() => setSelectedAchievement(item)}
              aria-label={`View ${item.title}`}
              className="block w-full cursor-zoom-in text-left"
            >

              <div
                className={`relative w-full ${item.aspect} overflow-hidden border border-[#D8D5CA] bg-[#EEEAE0]`}
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.02]"
                />

              </div>

            </button>

            {/* Achievement Information */}
            <div className="mt-4">

              <h3 className="text-sm font-semibold leading-relaxed text-[#111111]">
                {item.title}
              </h3>

              <p className="mt-2 text-xs font-medium tracking-wide text-[#A5A18F]">
                {item.year}
              </p>

            </div>

          </article>
        ))}

      </div>

    </div>

    {/* Image Preview Modal */}
    {selectedAchievement && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
        onClick={() => setSelectedAchievement(null)}
      >

        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedAchievement.title}
          className="relative flex w-full max-w-6xl flex-col items-center"
          onClick={(event) => event.stopPropagation()}
        >

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedAchievement(null)}
            aria-label="Close preview"
            className="absolute -top-11 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-2xl text-white transition hover:bg-white/40"
          >
            &times;
          </button>

          {/* Full Image */}
          <div className="relative h-[75vh] w-full">
            <Image
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Certificate Information */}
          <div className="mt-4 text-center text-white">
            <h3 className="text-sm font-semibold">
              {selectedAchievement.title}
            </h3>

            <p className="mt-1 text-xs text-gray-300">
              {selectedAchievement.year}
            </p>
          </div>

        </div>
      </div>
    )}

  </section>
);
}
