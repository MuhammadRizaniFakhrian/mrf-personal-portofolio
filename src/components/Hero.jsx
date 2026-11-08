import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#F4F1E8] px-6 py-12 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Main Heading */}
        <div className="mt-12 md:mt-16">

          <h1 className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-[#111111] sm:text-6xl md:text-7xl lg:text-[96px]">
            Web
            <br />
            Developer.
          </h1>

        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:mt-16">

          {/* Profile Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#D8D5CA]">

            <Image
              src="/images/hero/profile.JPEG"
              alt="Muhammad Rizani Fakhrian"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />

          </div>

          {/* Introduction */}
          <div className="animate-fadeUp flex flex-col items-start pb-2">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#777366]">
              Hello, I'm
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#111111] md:text-4xl lg:text-5xl">
              Muhammad Rizani Fakhrian
            </h2>

            <p className="mt-4 text-base font-medium text-[#777366]">
              Web Developer
            </p>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#555044] md:text-base">
              I create modern websites and digital experiences using Next.js, React, and modern technologies.
            </p>

            {/* CTA */}
            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-3 border border-[#111111] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#111111] transition-all duration-300 hover:bg-[#111111] hover:text-white"
            >
              Explore My Work
              <span>↗</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
