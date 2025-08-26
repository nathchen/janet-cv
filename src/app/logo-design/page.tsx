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
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">Logo Design</h1>
                    <p className="mt-3 max-w-2xl text-white/70">Brand marks crafted for clarity, versatility, and memorability. Click any logo to view larger.</p>
                    <div className="mt-5 flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full border border-green-500/40 bg-white/5 px-3 py-1">Wordmark</span>
                        <span className="rounded-full border border-green-500/40 bg-white/5 px-3 py-1">Mark</span>
                        <span className="rounded-full border border-green-500/40 bg-white/5 px-3 py-1">Emblem</span>
                        <span className="rounded-full border border-green-500/40 bg-white/5 px-3 py-1">Monogram</span>
                    </div>
                </div>
            </section>
            <CardGrid
                items={[
                    {
                        title: "Preschool Proposal",
                        imageSrc: "/logo/proposed-logo-preschool.jpg",
                        description: "Friendly preschool concept exploring soft forms and playful balance.",
                        popup: true,
                    },
                    {
                        title: "APAC WBD (2021)",
                        imageSrc: "/logo/apac-wbd-2021-logo.png",
                        description: "Regional mark for World Book Day APAC initiative.",
                        popup: true,
                    },
                    {
                        title: "WMD Mexico",
                        imageSrc: "/logo/logo-wmd-mx.png",
                        description: "Country variant aligned to the global WMD system.",
                        popup: true,
                    },
                    {
                        title: "Mathlete",
                        imageSrc: "/logo/mathlete.png",
                        description: "Competitive math identity with energetic letterforms.",
                        popup: true,
                    },
                    {
                        title: "Mathletics",
                        imageSrc: "/logo/mathletics-logo.png",
                        description: "Core brand mark used across web and product surfaces.",
                        popup: true,
                    },
                    {
                        title: "NNC (2021)",
                        imageSrc: "/logo/nnc-logo-2021-400px.png",
                        description: "Refresh emphasizing clarity at small sizes.",
                        popup: true,
                    },
                    {
                        title: "WMD Champions",
                        imageSrc: "/logo/wmd-2021-logo-champions-f.png",
                        description: "Event sub-brand celebrating top performers.",
                        popup: true,
                    },
                    {
                        title: "WMD CMYK Nevada",
                        imageSrc: "/logo/wmd-cmyk-ver-nevada-txt.png",
                        description: "State edition with typography lockup variant.",
                        popup: true,
                    },
                ]}
            />
        </div>
    );
}


