import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <section className="relative isolate overflow-hidden text-white mb-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 " />
          {/* <div className="pointer-events-none absolute -left-24 top-10 h-[40rem] w-[40rem] rounded-full bg-green-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -right-24 -bottom-10 h-[30rem] w-[30rem] rounded-full bg-green-600/25 blur-3xl" /> */}
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="h-1 w-16 bg-green-500 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Logo Design
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Brand marks crafted for clarity, versatility, and memorability.
            Click any logo to view larger.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-green-500/40 bg-white/5 px-3 py-1">
              Wordmark
            </span>
            <span className="rounded-full border border-green-500/40 bg-white/5 px-3 py-1">
              Mark
            </span>
            <span className="rounded-full border border-green-500/40 bg-white/5 px-3 py-1">
              Emblem
            </span>
            <span className="rounded-full border border-green-500/40 bg-white/5 px-3 py-1">
              Monogram
            </span>
          </div>
        </div>
      </section>
      <CardGrid
        items={[
          {
            title: "Preschool Proposal",
            imageSrc: "/logo/proposed-logo_preschool.jpg",
            description:
              "Friendly preschool concept exploring soft forms and playful balance.",
            popup: true,
          },
          {
            title: "Mathletics",
            imageSrc: "/logo/mx-logo.png",
            description:
              "Core brand mark for Mathletics, applied across web, campaigns, and product materials.",
            popup: true,
          },
          {
            title: "World Maths Day 15th Year Logo",
            imageSrc: "/logo/wmd-15yrs.png",
            description:
              "Anniversary logo for World Maths Day, featuring a typographic lockup and celebratory design.",
            popup: true,
          },
          {
            title: "World Maths Day Champions Challenge (2021)",
            imageSrc: "/logo/wmd-champ-logo.png",
            description:
              "Logo for the World Maths Day Champions Challenge, created for a celebratory event spotlighting top performers.",
            popup: true,
          },
          {
            title: "Mathlete Games",
            imageSrc: "/logo/mathlete.png",
            description:
              "Competitive sub-brand identity for Mathlete Games, using energetic letterforms and bold motifs.",
            popup: true,
          },
          {
            title: "November Numeracy Challenge (NNC 2021)",
            imageSrc: "/logo/nnc-mx-logo.png",
            description:
              "Logo for the November Numeracy Challenge, refreshed for clarity and scalability across formats.",
            popup: true,
          },
          {
            title: "APAC World Book Day (2021)",
            imageSrc: "/logo/wbd-reggs-logo.png",
            description:
              "Regional identity for the World Book Day APAC initiative, designed for digital and event promotion.",
            popup: true,
          },
        ]}
      />
    </div>
  );
}
