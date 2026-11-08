import Image from "next/image";

const educations = [
  {
    id: 1,
    year: "2026",
    period: "2022 – 2026",
    logo: "/images/education/Logo_Universitas_Brawijaya.svg",
    institution: "Universitas Brawijaya",
    degree: "Diploma III",
    major: "Teknologi Informasi",
    location: "Malang, Indonesia",
  },
  {
    id: 2,
    year: "2026",
    logo: "/images/education/Logo_UTE.png",
    period: "2026 – Present",
    institution: "Universitas Terbuka",
    degree: "Sarjana (S1)",
    major: "Sistem Informasi",
    location: "Indonesia",
  },
];

export default function Education() {
  
return (
  <section
    id="education"
    className="bg-[#F4F1E8] px-6 py-24 md:px-12 lg:px-16"
  >
    <div className="mx-auto max-w-7xl">

      {/* Section Metadata */}
      <div className="flex justify-between border-b border-[#D8D5CA] pb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777366]">
        <span>05 / Education</span>
        <span>Academic Background</span>
      </div>

      {/* Section Heading */}
      <div className="mt-12 md:mt-16">

        <h2 className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-[#111111] md:text-7xl">
          Education.
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#555044] md:text-base">
          My academic background and educational journey.
        </p>

      </div>

      {/* Education Grid */}
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

        {educations.map((item, index) => (
          <article
            key={item.id}
            className="border-t border-[#D8D5CA] pt-7"
          >

            {/* University Number & Logo */}
            <div className="mb-7 flex items-center justify-between">

              <span className="text-[10px] font-medium tracking-[0.2em] text-[#A5A18F]">
                {String(index + 1).padStart(2, "0")} / UNIVERSITY
              </span>

              <div className="flex h-16 w-16 items-center justify-center">

                <Image
                  src={item.logo}
                  alt={`Logo ${item.institution}`}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />

              </div>

            </div>

            {/* Education Information */}
            <div>

              <h3 className="text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
                {item.institution}
              </h3>

              <p className="mt-4 text-sm text-[#777366]">
                {item.degree}
              </p>

              <p className="mt-1 text-base font-semibold text-[#111111]">
                {item.major}
              </p>

            </div>

            {/* Education Period */}
            <div className="mt-8 border-t border-[#D8D5CA] pt-5">

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#777366]">
                Education Period
              </p>

              <p className="mt-3 text-sm font-medium text-[#333333]">
                {item.period}
              </p>

              <p className="mt-2 text-xs text-[#777366]">
                {item.location}
              </p>

            </div>

          </article>
        ))}

      </div>

    </div>
  </section>
);
}
