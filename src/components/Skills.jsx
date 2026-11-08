import {
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaFigma
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiJavascript
} from "react-icons/si";


const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-300"
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-500"
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400"
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "text-red-500"
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-500"
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500"
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "text-purple-500"
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F4F1E8] px-6 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Metadata */}
        <div className="flex justify-between border-b border-[#D8D5CA] pb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777366]">
          <span>02 / Skills</span>
          <span>Technical Toolkit</span>
        </div>

        {/* Section Heading */}
        <div className="mt-12 md:mt-16">

          <h2 className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-[#111111] md:text-7xl">
            Skills.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#555044] md:text-base">
            The technologies and tools I use for web development,
            database management, and UI design.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="mt-14 grid grid-cols-2 gap-x-5 sm:grid-cols-4 md:gap-x-8">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group min-h-140px border-t border-[#D8D5CA] py-6 transition-colors duration-300 hover:border-[#A5A18F]"
              >

                {/* Skill Number & Icon */}
                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-medium tracking-wider text-[#A5A18F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon
                    aria-hidden="true"
                    className={`text-4xl transition-transform duration-300 group-hover:-translate-y-1 ${skill.color}`}
                  />

                </div>

                {/* Skill Name */}
                <p className="mt-6 text-sm font-semibold text-[#111111] md:text-base">
                  {skill.name}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}