const experiences = [
  {
    id: 1,
    year: "2023",
    role: "Pengurus Organisasi",
    organization: "Taekwondo Universitas Brawijaya",
    period: "2023-2024",
    description:
      "Berperan aktif dalam menjalankan program kerja organisasi, berkoordinasi dengan sesama pengurus, serta mendukung berbagai kegiatan untuk mencapai tujuan organisasi.",
  },
  {
    id: 2,
    year: "2023",
    role: "Ketua Pelaksana",
    organization: "Seleksi Penerimaan Anggota Baru Taekwondo Universitas Brawijaya",
    period: "2023",
    description:
      "Memimpin perencanaan dan pelaksanaan kegiatan, mengoordinasikan panitia antar divisi, serta memastikan seluruh rangkaian acara berjalan sesuai dengan rencana.",
  },
  {
    id: 3,
    year: "2024",
    role: "Quality Assurance",
    organization: "Project-Based Learning",
    period: "2024",
    description:
      "Bertanggung jawab memantau proses dan hasil kerja setiap divisi, mengevaluasi kesesuaian pelaksanaan kegiatan dengan standar yang ditetapkan, serta memberikan masukan untuk perbaikan kualitas kegiatan.",
  },
];

export default function Experience() {

  


return (
  <section
    id="experience"
    className="bg-[#F4F1E8] px-6 py-24 md:px-12 lg:px-16"
  >
    <div className="mx-auto max-w-7xl">

      {/* Section Metadata */}
      <div className="flex justify-between border-b border-[#D8D5CA] pb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777366]">
        <span>04 / Experience</span>
        <span>Campus & Project Experience</span>
      </div>

      {/* Section Heading */}
      <div className="mt-12 mb-16 md:mt-16">

        <h2 className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-[#111111] md:text-7xl">
          Experience.
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#555044] md:text-base">
          My organizational experiences, leadership roles,
          and activities that have shaped my journey.
        </p>

      </div>

      {/* Alternating Vertical Timeline */}
      <div className="relative mx-auto max-w-4xl">

        {/* Center Timeline Line */}
        <div className="absolute bottom-0 left-3 top-0 w-px bg-[#D8D5CA] md:left-1/2 md:-translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-0">

          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative grid grid-cols-[24px_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] md:gap-x-4 ${
                  index > 0 ? "md:-mt-10" : ""
                }`}
              >

                {/* Timeline Dot & Connector */}
                <div className="relative col-start-1 row-start-1 flex justify-center md:col-start-2">

                  <span className="relative z-10 mt-1 h-3 w-3 rounded-full border-2 border-[#A5A18F] bg-[#F4F1E8] ring-4 ring-[#F4F1E8]" />

                  {/* Horizontal Connector */}
                  <span
                    className={`absolute top-[6px] hidden h-px w-9 bg-[#D8D5CA] md:block ${
                      isLeft ? "right-1/2" : "left-1/2"
                    }`}
                  />

                </div>

                {/* Experience Information */}
                <div
                  className={`col-start-2 row-start-1 min-w-0 max-w-[520px] ${
                    isLeft
                      ? "md:col-start-1 md:ml-auto md:max-w-[340px] md:pr-1 md:text-right"
                      : "md:col-start-3 md:mr-auto md:max-w-[340px] md:pl-1 md:text-left"
                  }`}
                >

                  {/* Period */}
                  <p className="mb-2 text-xs font-semibold tracking-wide text-[#A5A18F]">
                    {item.period}
                  </p>

                  {/* Role */}
                  <h3 className="text-lg font-bold leading-snug text-[#111111] md:text-xl">
                    {item.role}
                  </h3>

                  {/* Organization */}
                  <p className="mt-1 text-sm font-medium text-[#777366]">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-[#555044]">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  </section>
);
}