
import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "Full-Stack Web Application",
    name: "Singgahna.",
    description:
      "A full-stack accommodation booking platform that allows users to discover, book, and manage boarding house transactions.",
    tech: [
      "Laravel 11",
      "Next.js",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "MySQL",
    ],
    image: "/images/projects/singgahnaa.png",
  },
  {
    number: "02",
    category: "Personal Website",
    name: "Portfolio Website.",
    description:
      "A personal portfolio website built to showcase projects, skills, and professional experience.",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
    image: "/images/projects/portofolioo.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F4F1E8] px-6 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Metadata */}
        <div className="flex justify-between border-b border-[#D8D5CA] pb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777366]">
          <span>03 / Projects</span>
          <span>Selected Work</span>
        </div>

        {/* Section Heading */}
        <div className="mt-12 md:mt-16">

          <h2 className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-[#111111] md:text-7xl">
            Projects.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#555044] md:text-base">
            A collection of projects I've built, showcasing my skills
            and experience in web development.
          </p>

        </div>

        {/* Project Showcase */}
        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">

          {projects.map((project, index) => {
            const imageFirst = index % 2 !== 0;

            return (
              <article
                key={project.number}
                className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14"
              >

                {/* Project Information */}
                <div
                  className={`min-w-0 ${
                    imageFirst ? "md:order-2" : ""
                  }`}
                >

                  {/* Project Number & Category */}
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#777366]">

                    <span>{project.number}</span>

                    <span className="text-[#A5A18F]">/</span>

                    <span>{project.category}</span>

                  </div>

                  {/* Project Name */}
                  <h3 className="mt-5 text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#555044] md:text-base">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="mt-8 border-t border-[#D8D5CA] pt-5">

                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777366]">
                      Built With
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-3">

                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-medium text-[#333333]"
                        >
                          {item}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

                {/* Project Image */}
                <div
                  className={`min-w-0 ${
                    imageFirst ? "md:order-1" : ""
                  }`}
                >

                  <div className="group relative aspect-16/10 w-full overflow-hidden border border-[#D8D5CA] bg-[#EAE6DC]">

                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} project preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs font-medium uppercase tracking-wider text-[#A5A18F]">
                        Project Preview
                      </div>
                    )}

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
