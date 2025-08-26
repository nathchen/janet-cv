import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden text-white mb-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 -z-20 bg-center" />
          {/* <div className="absolute inset-0 -z-10 bg-black/60" /> */}
          <div className="absolute inset-0" />
          {/* <div className="pointer-events-none absolute -left-24 top-10 h-[40rem] w-[40rem] rounded-full bg-green-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-10 h-[30rem] w-[30rem] rounded-full bg-green-600/25 blur-3xl" /> */}
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="h-1 w-16 bg-green-500 mb-8" />
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Graphic & Digital Design
          </h1>
          <p className="mt-5 max-w-2xl text-white/70">
            Portfolio showcasing motion graphics, UI/UX design, infographics,
            digital campaigns, point-of-sale displays, layouts, logos, and
            illustrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors text-sm font-medium"
            >
              Contact me
            </Link>
            <Link
              href="/cv"
              className="px-5 py-2.5 rounded bg-green-500 text-black hover:bg-green-400 transition-colors text-sm font-medium"
            >
              View CV
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-medium mb-4">Featured Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
          {[
            { href: "/motion-design", icon: "ui-ux.png", label: "Motion" },
            { href: "/ui-ux-design", icon: "ui-ux.png", label: "UI/UX" },
            {
              href: "/infographic-design",
              icon: "infographic.png",
              label: "Infographic",
            },
            { href: "/digital-design", icon: "digital.png", label: "Digital" },
            { href: "/pos-design", icon: "pos.png", label: "POS" },
            { href: "/layout-design", icon: "layout.png", label: "Layout" },
            { href: "/logo-design", icon: "logo.png", label: "Logo" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded border border-black/10 px-3 py-2 flex flex-col items-center justify-center text-center hover:bg-foreground/5"
            >
              <img
                src={`/icons/${item.icon}`}
                alt={item.label}
                className="w-40"
              />
              {/* {item.label} */}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
