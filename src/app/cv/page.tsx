// app/contact/page.tsx (Next.js 13+ App Router)

import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Jee Un (Janet) Kim — CV",
  description: "Digital Design Officer",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Page container */}
      <div className="mx-auto max-w-4xl p-6 md:p-10 bg-white/80 shadow-sm print:shadow-none print:p-0">
        {/* Header */}
        <header className="border-b pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            JEE UN (JANET) KIM
          </h1>
          <p className="mt-1 text-sm md:text-base text-gray-700">
            Digital Design Officer
          </p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
            <a
              className="hover:underline flex "
              href="mailto:	janet.kim6013@gmail.com"
            >
              <Mail className="w-5 h-5 text-blue-600 mr-4" />
              janet.kim6013@gmail.com
            </a>

            <MapPin className="w-5 h-5 text-blue-600" />
            <span>Sydney NSW</span>
            {/* Add your live folio URL here */}
            {/* <a
                            className="hover:underline text-blue-700"
                            href="https://your-portfolio-link.example"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Portfolio
                        </a> */}
          </div>
        </header>

        {/* Summary */}
        <section aria-labelledby="summary" className="mb-8">
          <h2 id="summary" className="text-xl font-semibold text-gray-900 mb-2">
            Summary
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Senior Graphic and Multimedia Designer with over 15 years’
            experience delivering high-quality digital and print assets across
            education and campaign settings. I specialise in{" "}
            <strong>
              motion graphics, GIF animations, and accessible e-learning design
            </strong>
            , with proven expertise in optimising{" "}
            <strong>
              Rise courses, PowerPoint presentations, and interactive PDFs
            </strong>{" "}
            to create engaging, WCAG-compliant learning experiences. Proficient
            in Adobe Creative Suite (Illustrator, Photoshop, InDesign, Animate,
            Acrobat, After Effects, Premiere Pro), I combine creativity and
            technical skill to produce animations, illustrations, infographics,
            and branded materials. Collaborative and outcome-focused, I work
            closely with SMEs, learning designers, and senior stakeholders to
            deliver interactive, on-brand outcomes that enhance learner
            engagement and meet organisational goals.
          </p>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills" className="mb-8">
          <h2 id="skills" className="text-xl font-semibold text-gray-900 mb-2">
            Skills
          </h2>
          <ul className="grid md:grid-cols-2 gap-x-6 list-disc pl-5 text-gray-800">
            <li>
              <strong>Design & Development:</strong> Illustrator, Photoshop,
              InDesign, XD, Animate, Acrobat, After Effects, Premiere Pro;
              Microsoft PowerPoint/Word/Excel; Figma; Articulate Rise.
            </li>
            <li>
              <strong>Content & Multimedia:</strong> GIF animations, motion
              graphics, infographics, social media assets; WCAG accessibility
              (PDF/PPTX remediation).
            </li>
            <li>
              <strong>Workflow & Collaboration:</strong> Jira, SharePoint, Trim,
              Monday.com, Planner; SME/LD collaboration; version control and
              file organisation.
            </li>
            <li>
              <strong>Web/Other:</strong> HTML, CSS, WordPress; print & POS;
              interactive/editable PDFs.
            </li>
          </ul>
        </section>

        {/* Experience — Current */}
        <section aria-labelledby="experience" className="mb-8">
          <h2
            id="experience"
            className="text-xl font-semibold text-gray-900 mb-4"
          >
            Work Experience
          </h2>

          <article className="mb-8">
            <header className="mb-1">
              <h3 className="font-semibold text-gray-900">
                Department of Education NSW — Digital Design Officer (Clerk 7/8)
              </h3>
              <p className="text-sm text-gray-700">
                Jan 2025 – Present (8 months)
              </p>
            </header>

            <h4 className="mt-3 font-semibold text-gray-900">
              Responsibilities
            </h4>
            <ul className="list-disc pl-5 text-gray-800 space-y-1">
              <li>
                Design and develop{" "}
                <strong>animations, GIFs, and motion graphics</strong> to
                support learning modules and presentations.
              </li>
              <li>
                Remediate PowerPoint decks, guidebooks, and interactive PDFs to
                meet <strong>WCAG</strong> standards.
              </li>
              <li>
                Collaborate with SMEs and LDs on graphics, illustrations, and
                course styling aligned with curriculum needs.
              </li>
              <li>
                Style and optimise <strong>Rise</strong> courses, integrating
                animation/motion graphics for better engagement.
              </li>
              <li>
                Manage workflows via <strong>Jira</strong>, maintain{" "}
                <strong>SharePoint</strong> libraries, and check assets in/out
                of <strong>Trim</strong>.
              </li>
              <li>
                Provide creative problem-solving and design support to ensure
                timely, high-quality delivery.
              </li>
            </ul>

            <h4 className="mt-3 font-semibold text-gray-900">Achievements</h4>
            <ul className="list-disc pl-5 text-gray-800 space-y-1">
              <li>
                Produced and uploaded{" "}
                <strong>291+ graphics and GIFs across 24 Rise modules</strong>{" "}
                (PDHPE K–6, Secondary Mathematics, English, History, Early
                Learning).
              </li>
              <li>
                Styled the <strong>Secondary Mathematics Rise</strong> module
                with a paper-texture header, collaged imagery, and{" "}
                <strong>27 custom graphics</strong>.
              </li>
              <li>
                Created <strong>animated GIFs and motion graphics</strong>{" "}
                (e.g., scroll-effect GIFs, AE countdown timers) integrated into
                Rise and PowerPoint.
              </li>
              <li>
                Remediated{" "}
                <strong>12+ major PPTX projects (400+ slides)</strong>,
                accessibility-proofed and enhanced with animations.
              </li>
              <li>
                Delivered <strong>60+ illustrations</strong> for HSIE
                Geography/History (timelines, maps, complex diagrams).
              </li>
              <li>
                Designed a <strong>66-page interactive guidebook</strong> with
                full accessibility remediation, plus{" "}
                <strong>11 editable forms</strong>.
              </li>
              <li>
                Delivered accessible <strong>infographic PDFs</strong> (e.g.,
                process maps) and the <strong>IAC 2025 Mission Patch</strong>{" "}
                certificate.
              </li>
              <li>
                Streamlined asset management with precise{" "}
                <strong>Trim version control</strong>{" "}
                (check-out/edit/remediate/check-in).
              </li>
              <li>
                Designed and pitched a branding logo set for{" "}
                <strong>Public Preschool</strong>.
              </li>
            </ul>
          </article>

          {/* Experience — Senior Graphic Designer */}
          <article className="mb-8">
            <header className="mb-1">
              <h3 className="font-semibold text-gray-900">
                Department of Education NSW — Senior Graphic Designer (Clerk
                7/8)
              </h3>
              <p className="text-sm text-gray-700">
                Jan 2023 – Jan 2025 (2 years)
              </p>
            </header>

            <p className="text-gray-800">
              Led design for CIPL; partnered with directors/stakeholders on town
              halls and directorate initiatives; created complex images,
              infographics, and GIFs across Curriculum Reform modules;
              reorganised CR asset libraries; and supported designers via
              reviews/mentoring. Delivered animated Google ads for OC campaign
              and accessible infographics (e.g., Evaluative & Collaborative
              Inquiry Cycles). Edited/polished training videos with voiceover
              sync and audio clean-up (Premiere Pro/Audition).
            </p>
          </article>

          {/* Experience — 3P Learning */}
          <article className="mb-8">
            <header className="mb-1">
              <h3 className="font-semibold text-gray-900">
                3P Learning — Senior Visual Designer (Full Time)
              </h3>
              <p className="text-sm text-gray-700">
                Sep 2010 – Dec 2022 (12 years 3 months)
              </p>
            </header>

            <p className="text-gray-800">
              Managed international B2B campaign design; built/maintained
              WordPress pages; delivered EDMs, ads, social content, GIFs;
              designed POS and print; produced 10,000+ data-merged PDFs;
              contributed to brand guidelines; and delivered region-ready assets
              across languages and formats.
            </p>
          </article>

          {/* Experience — Image Smart */}
          <article>
            <header className="mb-1">
              <h3 className="font-semibold text-gray-900">
                Image Smart — Mid Weight Graphic Designer
              </h3>
              <p className="text-sm text-gray-700">
                Jan 2008 – Aug 2010 (2 years 8 months)
              </p>
            </header>
            <p className="text-gray-800">
              Produced POS materials for brands (Sara Lee, Campari);
              collaborated on in-house print; ensured on-time delivery and brand
              integrity.
            </p>
          </article>
        </section>

        {/* Education */}
        <section aria-labelledby="education" className="mb-8">
          <h2
            id="education"
            className="text-xl font-semibold text-gray-900 mb-2"
          >
            Education & Qualifications
          </h2>
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            <li>
              <strong>University of Canberra</strong> — Bachelor (Graphic Design
              major; Media Production minor)
            </li>
            <li>
              <strong>Peak Usability</strong> — Certificate in Interaction
              Design (2013)
            </li>
          </ul>
        </section>

        {/* References (collapsible for brevity) */}
        <section aria-labelledby="references" className="mb-8">
          <h2
            id="references"
            className="text-xl font-semibold text-gray-900 mb-2"
          >
            References
          </h2>
          <details className="rounded-lg border p-4 text-gray-800">
            <summary className="cursor-pointer font-medium">
              Show referees
              <span className="ml-2 text-sm text-gray-500">
                (DoE & 3P Learning contacts)
              </span>
            </summary>
            <div className="mt-3 space-y-2 text-sm">
              <p>Full contact details available on request.</p>
            </div>
          </details>
        </section>

        {/* Print / Download hint */}
        <footer className="pt-4 border-t text-xs text-gray-500">
          Tip: Use your browser’s <span className="font-medium">Print</span> to
          save as PDF.
        </footer>
      </div>
    </main>
  );
}
