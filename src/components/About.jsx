export default function About() {
  const stats = [
    {
      number: "03+",
      label: "Years Learning",
    },
    {
      number: "02+",
      label: "Projects",
    },
    {
      number: "08+",
      label: "Tools & Technologies",
    },
    {
      number: "∞",
      label: "Continuous Growth",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#F4F1E8] px-6 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Metadata */}
        <div className="flex justify-between border-b border-[#D8D5CA] pb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777366]">
          <span>01 / About Me</span>
          <span>Get To Know Me</span>
        </div>

        {/* Main Heading */}
        <h2 className="mt-12 max-w-4xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#111111] md:mt-16 md:text-6xl">
          About Me.
        </h2>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] md:gap-20">

          {/* About Description */}
          <div>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#777366]">
              Introduction
            </p>

            <p className="max-w-1xl text-base leading-relaxed text-[#555044] md:text-lg">
              I am a Full Stack Developer with experience building modern web applications.
              I enjoy creating user-friendly digital solutions and solving real-world problems
              through technology.
            </p>

            <p className="mt-5 max-w-1xl text-base leading-relaxed text-[#555044] md:text-lg">
              I work with technologies such as Laravel, Next.js, React, and MySQL, while
              continuously improving my skills through hands-on projects and learning new technologies.
            </p>

          </div>

          {/* Statistics */}
          <div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-[#D8D5CA] pt-4"
                >

                  <h3 className="text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-xs text-[#777366]">
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
