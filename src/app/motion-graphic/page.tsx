import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Motion Graphic"
        subtitle="Short loops and reels in GIF and MP4 formats."
      />
      <CardGrid
        items={[
          {
            title: "Secondary Mathematics Styling – GIF Showcase",
            imageSrc: "/motion-graphic/styling-math-rise.gif",
            popup: true,
            description:
              "Showcase of the Secondary Mathematics module, presented as a GIF highlighting new styling and motion.",
          },
          {
            title: "Early learning e-module – GIF Showcase",
            imageSrc: "/motion-graphic/rise-course-el1.gif",
            popup: true,
            description:
              "Showcase of an Early Learning e-module, presented as a GIF highlighting design and motion.",
          },
          {
            title: "Curriculum History Year 7–10 Module – GIF Showcase",
            imageSrc: "/motion-graphic/rise-course-crm-history1.gif",
            popup: true,
            description:
              "Showcase of the History Year 7–10 e-module, presented as a GIF highlighting design and motion.",
          },
          {
            title: "Curriculum English Year 7–10 Module – GIF Showcase",
            imageSrc: "/motion-graphic/rise-course-crm-english.gif",
            popup: true,
            description:
              "Showcase of the English Year 7–10 e-module, presented as a GIF highlighting design and motion.",
          },
          {
            title: "English Module – Scrolling Page GIF",
            imageSrc: "/motion-graphic/scrolling-page_.gif",
            popup: true,
            description:
              "GIF created within the English module to guide users through navigation to the final point.",
          },
          {
            title: "Tech Y7–8 Module – GIF Animation",
            imageSrc: "/motion-graphic/cr_tech7-8_m3_l5.gif",
            popup: true,
            description:
              "GIF created within the Technology Year 7–8 module to support easier understanding of concepts.",
          },
          {
            title: "Teaching & Learning Cycle",
            imageSrc: "/motion-graphic/tlc.gif",
            popup: true,
            description:
              "Showcase of the Teaching and Learning Cycle, presented as a GIF illustrating planning, practice, assessment, and analysis.",
          },
          {
            title: "Powerpoint animation SDD",
            thumbnail: "/motion-graphic/sdd_sd_pc5_sample_thumb.png",
            imageSrc: "/motion-graphic/sdd_sd_pc5_sample.mp4",
            popup: true,
            description:
              "PPTX converted to MP4 with synced narration (auto muted), audio enhanced in Audition, and edited in Premiere Pro.",
          },
          {
            title: "PowerPoint Animation – Showcase",
            thumbnail: "/motion-graphic/pptx_animation_thumbnail.png",
            imageSrc: "/motion-graphic/pptx_animation_edited.mp4",
            popup: true,
            description:
              "Showcase of a remediated PowerPoint with accessibility updates and added animations on key slides, presented as selected pages.",
          },
          {
            title: "Animation Screen",
            thumbnail: "/motion-graphic/animation-screen.png",
            imageSrc: "/motion-graphic/animation-screen.mp4",
            popup: true,
            description:
              "After Effects animation embedded into a PowerPoint guide to enhance clarity and understanding.",
          },
          {
            title: "Countdown (3 min)",
            thumbnail: "/motion-graphic/countdown-3min.png",
            imageSrc: "/motion-graphic/countdown-3min.mp4",
            popup: true,
            description:
              "A 3-minute countdown timer with smooth transitions, designed for presentations and training sessions to signal the start of activities.",
          },
        ]}
      />
    </div>
  );
}
