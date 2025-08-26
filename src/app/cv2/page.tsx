import React from "react";

export const metadata = {
  title: "Jee Un (Janet) Kim — CV",
  description: "Senior Graphic & Multimedia Designer CV",
};

function Section({
  id,
  title,
  children,
}: React.PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} aria-labelledby={id + "-title"} className="mb-8">
      <h2
        id={id + "-title"}
        className="text-lg font-semibold tracking-tight text-slate-100"
      >
        {title}
      </h2>
      <div className="mt-3 rounded-2xl border bg-white/90 p-5 shadow-sm ring-1 ring-black/[0.04]">
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen print:bg-white">
      {/* Top banner */}
      {/* <div className="bg-white/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur sticky top-0 z-10 border-b print:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                JEE UN (JANET) KIM
              </h1>
              <p className="text-sm text-slate-600">
                Senior Graphic & Multimedia Designer
              </p>
            </div>
            <nav className="hidden gap-4 md:flex text-sm">
              <a className="hover:underline" href="#summary">Summary</a>
              <a className="hover:underline" href="#skills">Skills</a>
              <a className="hover:underline" href="#experience">Experience</a>
              <a className="hover:underline" href="#education">Education</a>
              <a className="hover:underline" href="#references">References</a>
            </nav>
          </div>
        </div> */}

      {/* Content grid */}
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 md:grid-cols-12 print:block print:px-0 print:py-0">
        {/* Sidebar */}
        <aside className="md:col-span-4 lg:col-span-3 print:hidden">
          <div className="sticky top-20 space-y-6">
            {/* Profile / contact card */}
            <div className="rounded-2xl border bg-white/80 p-5 shadow-sm ring-1 ring-black/[0.04]">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Jee Un (Janet) Kim
                  </p>
                  <p className="text-xs text-slate-600">Sydney, NSW</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <a
                  className="block text-slate-700 hover:underline"
                  href="mailto:	janet.kim6013@gmail.com"
                >
                  janet.kim6013@gmail.com
                </a>
                <p className="text-slate-700">Sydney NSW</p>
                <a
                  className="block text-blue-700 hover:underline"
                  // href="https://your-portfolio-link.example"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 print:hidden">
                <a
                  // href="https://your-portfolio-link.example"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  View Portfolio
                </a>
                <a
                  href="mailto:	janet.kim6013@gmail.com"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  Email Me
                </a>
                {/* <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Download PDF
                  </button> */}
              </div>
            </div>

            {/* Quick skills highlight */}
            <div className="rounded-2xl border bg-white/80 p-5 shadow-sm ring-1 ring-black/[0.04]">
              <p className="text-sm font-medium text-slate-900">Core Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Illustrator",
                  "Photoshop",
                  "InDesign",
                  "Animate",
                  "After Effects",
                  "Premiere Pro",
                  "Acrobat",
                  "Figma",
                  "Articulate Rise",
                  "PowerPoint",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main column */}
        <div className="md:col-span-8 lg:col-span-9 print:col-span-12">
          {/* Summary */}
          <Section id="summary" title="Summary">
            <p className="text-slate-800 leading-relaxed">
              Senior Graphic and Multimedia Designer with over 15 years’
              experience across education and campaigns. I specialise in{" "}
              <strong>
                motion graphics, GIF animations, and accessible e-learning
                design
              </strong>
              , with proven expertise in optimising{" "}
              <strong>Rise courses, PowerPoint, and interactive PDFs</strong> to
              deliver visually impactful, WCAG-compliant learning experiences. I
              combine creative direction with production rigour, collaborating
              closely with SMEs, learning designers, and senior stakeholders to
              deliver on-brand outcomes that enhance learner engagement and meet
              organisational goals.
            </p>
          </Section>

          {/* Skills */}
          <Section id="skills" title="Skills">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Design & Development
                </h3>
                <p className="mt-1 text-sm text-slate-800">
                  Illustrator, Photoshop, InDesign, XD, Animate, Acrobat, After
                  Effects, Premiere Pro, Figma, Articulate Rise.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Content & Accessibility
                </h3>
                <p className="mt-1 text-sm text-slate-800">
                  GIF animations, motion graphics, infographics, social assets;
                  PDF/PPTX remediation (WCAG 2.1 AA).
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Workflow & Collaboration
                </h3>
                <p className="mt-1 text-sm text-slate-800">
                  Jira, SharePoint, Trim, Monday.com, Planner; SME/LD
                  collaboration; version control; asset libraries.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Web & Print
                </h3>
                <p className="mt-1 text-sm text-slate-800">
                  HTML, CSS, WordPress; print & POS; interactive/editable PDFs,
                  templates, and brand systems.
                </p>
              </div>
            </div>
          </Section>

          {/* Experience */}
          <Section id="experience" title="Work Experience">
            {/* Current role */}
            <article className="mb-8">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-slate-900">
                  Department of Education NSW — Digital Design Officer (Clerk
                  7/8)
                </h3>
                <p className="text-sm text-slate-600">
                  Jan 2025 – Present (8 months)
                </p>
              </header>

              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Responsibilities
                  </h4>
                  <ul className="mt-2 list-outside list-disc pl-5 text-sm text-slate-800 space-y-1">
                    <li>
                      Design and develop{" "}
                      <strong>animations, GIFs, and motion graphics</strong> for
                      learning modules and presentations.
                    </li>
                    <li>
                      Remediate PPTX, guidebooks, and interactive PDFs to meet{" "}
                      <strong>WCAG</strong> standards.
                    </li>
                    <li>
                      Collaborate with SMEs and LDs on graphics, illustrations,
                      and course styling.
                    </li>
                    <li>
                      Style and optimise <strong>Rise</strong> courses,
                      integrating animation/motion graphics.
                    </li>
                    <li>
                      Manage workflows via <strong>Jira</strong>,{" "}
                      <strong>SharePoint</strong>, and <strong>Trim</strong>{" "}
                      check-in/out.
                    </li>
                    <li>
                      Provide design problem-solving and delivery support.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Achievements
                  </h4>
                  <ul className="mt-2 list-outside list-disc pl-5 text-sm text-slate-800 space-y-1">
                    <li>
                      Produced and uploaded{" "}
                      <strong>
                        291+ graphics & GIFs across 24 Rise modules
                      </strong>{" "}
                      (PDHPE K–6, Secondary Mathematics, English, History, Early
                      Learning).
                    </li>
                    <li>
                      Styled the <strong>Secondary Mathematics Rise</strong>{" "}
                      module (paper-texture header, collaged imagery,{" "}
                      <strong>27 custom graphics</strong>).
                    </li>
                    <li>
                      Created <strong>animated GIFs & motion graphics</strong>{" "}
                      (scroll-effect GIFs, AE countdowns) integrated into Rise &
                      PowerPoint.
                    </li>
                    <li>
                      Remediated{" "}
                      <strong>12+ PPTX projects (400+ slides)</strong>,
                      accessibility-proofed and enhanced with animation.
                    </li>
                    <li>
                      Delivered <strong>60+ illustrations</strong> for HSIE
                      (timelines, maps, complex diagrams).
                    </li>
                    <li>
                      Designed a <strong>66-page interactive guidebook</strong>{" "}
                      with full accessibility remediation +{" "}
                      <strong>11 editable forms</strong>.
                    </li>
                    <li>
                      Delivered accessible <strong>infographic PDFs</strong>{" "}
                      (e.g., process maps) and the{" "}
                      <strong>IAC 2025 Mission Patch</strong> certificate.
                    </li>
                    <li>
                      Streamlined asset management with precise{" "}
                      <strong>Trim version control</strong> (check-out →
                      remediate → check-in).
                    </li>
                    <li>
                      Designed and pitched a branding logo set for{" "}
                      <strong>Public Preschool</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Senior Graphic Designer */}
            <article className="mb-8">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-slate-900">
                  Department of Education NSW — Senior Graphic Designer (Clerk
                  7/8)
                </h3>
                <p className="text-sm text-slate-600">
                  Jan 2023 – Jan 2025 (2 years)
                </p>
              </header>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">
                Led design for CIPL; produced session assets and templates;
                collaborated with directors/stakeholders on town halls; created
                complex images, infographics, and GIFs across Curriculum Reform
                modules; reorganised CR libraries; supported designers via
                reviews/mentoring; delivered animated Google ads for OC;
                produced accessible infographics (Evaluative & Collaborative
                Inquiry Cycles). Edited/polished training videos with voiceover
                sync and audio clean-up (Premiere Pro/Audition).
              </p>
            </article>

            {/* 3P Learning */}
            <article className="mb-8">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-slate-900">
                  3P Learning — Senior Visual Designer
                </h3>
                <p className="text-sm text-slate-600">
                  Sep 2010 – Dec 2022 (12 years 3 months)
                </p>
              </header>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">
                Managed international B2B campaign design; built WordPress
                pages; delivered EDMs, ads, social content, GIFs; designed
                POS/print; produced 10,000+ data-merged PDFs; contributed to
                brand guidelines; delivered region-ready assets across languages
                and formats.
              </p>
            </article>

            {/* Image Smart */}
            <article>
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-slate-900">
                  Image Smart — Mid Weight Graphic Designer
                </h3>
                <p className="text-sm text-slate-600">
                  Jan 2008 – Aug 2010 (2 years 8 months)
                </p>
              </header>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">
                Produced POS materials for major brands; collaborated on
                in-house print; ensured on-time delivery and brand integrity.
              </p>
            </article>
          </Section>

          {/* Education */}
          <Section id="education" title="Education & Qualifications">
            <ul className="list-outside list-disc pl-5 text-sm text-slate-800 space-y-1">
              <li>
                <strong>University of Canberra</strong> — Bachelor (Graphic
                Design major; Media Production minor)
              </li>
              <li>
                <strong>Peak Usability</strong> — Certificate in Interaction
                Design (2013)
              </li>
            </ul>
          </Section>

          {/* References */}
          <Section id="references" title="References">
            <details className="rounded-xl text-sm text-slate-800">
              <summary className="cursor-pointer font-medium text-slate-900">
                Show referees (DoE & 3P Learning)
              </summary>
              <div className="mt-3 space-y-2">
                <p>
                  <strong>David Boccalatte</strong> — Senior Digital Design
                  Officer, Curriculum Directorate (DoE)
                </p>
                <p>
                  <strong>Isaac Graham</strong> — Learning Design & Development
                  Advisor (DoE)
                </p>
                <p>
                  <strong>Liam Kerr</strong> — Global Head of B2B Marketing (3P
                  Learning)
                </p>
                <p>
                  <strong>Leigh Redman</strong> — Chief Marketing Officer (3P
                  Learning)
                </p>
                <p>
                  <strong>George Karantonis</strong> — Creative Director (Image
                  Smart)
                </p>
                <p className="text-slate-600">
                  Full contact details available on request.
                </p>
              </div>
            </details>
          </Section>

          {/* Footer */}
          <footer className="mt-10 border-t pt-4 text-xs text-slate-500">
            Tip: Use your browser’s <span className="font-medium">Print</span>{" "}
            to save as PDF. Layout adapts for printing.
          </footer>
        </div>
      </div>

      {/* Print styles (Tailwind utilities + a few scoped styles) */}
      <style>{`
          @media print {
            nav, aside, .print\\:hidden { display: none !important; }
            main { background: white !important; }
            a[href]:after { content: "" !important; } /* hide URL after links in print */
          }
        `}</style>
    </main>
  );
}
