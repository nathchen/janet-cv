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
            title: "Countdown (3 min)",
            thumbnail: "/motion-graphic/countdown-3min.png",
            imageSrc: "/motion-graphic/countdown-3min.mp4",
            popup: true,
            description:
              "A 3-minute countdown timer with smooth transitions, designed for presentations and training sessions to signal the start of activities.",
          },
          {
            title: "Animation Screen",
            thumbnail: "/motion-graphic/animation-screen.png",
            imageSrc: "/motion-graphic/animation-screen.mp4",
            popup: true,
            description:
              "An animated screen sequence highlighting UI elements and interactions to demonstrate motion design and user flow.",
          },
          {
            title: "CR Tech 7–8 MFAE Slide",
            imageSrc:
              "/motion-graphic/cr-tech7-8-m3-l5-mfae-slide1-a-noprocess.gif",
            popup: true,
            description:
              "GIF animation for Stage 7–8 Technology slides, visually enhancing curriculum content with engaging movement.",
          },
          {
            title: "EL 1",
            imageSrc: "/motion-graphic/el-1.gif",
            popup: true,
            description:
              "Motion graphic asset created for Early Learning modules, using simple animated shapes and icons for clarity.",
          },
          {
            title: "EL 2",
            imageSrc: "/motion-graphic/el-2.gif",
            popup: true,
            description:
              "A continuation of Early Learning animated assets, bringing playful motion to educational resources.",
          },
          {
            title: "Rise Course CRM",
            imageSrc: "/motion-graphic/rise-course-crm.gif",
            popup: true,
            description:
              "Animated sequence within a Rise 360 course, designed to guide learners through CRM system processes.",
          },
          {
            title: "Rise Course CRM 2",
            imageSrc: "/motion-graphic/rise-course-crm-2.gif",
            popup: true,
            description:
              "Second variation of Rise 360 CRM course animation, optimized for instructional clarity and learner engagement.",
          },
          {
            title: "Scrolling Page",
            imageSrc: "/motion-graphic/scrolling-page-noprocess.gif",
            popup: true,
            description:
              "A demonstration of animated page scrolling to showcase website interactions and smooth user navigation effects.",
          },
          {
            title: "Styling Math Rise",
            imageSrc: "/motion-graphic/styling-math-rise.gif",
            popup: true,
            description:
              "Custom animated styling within a Rise 360 mathematics course, focusing on equations and formulas presentation.",
          },
          {
            title: "Teaching & Learning Cycle",
            imageSrc: "/motion-graphic/teaching-learning-cycle-all.gif",
            popup: true,
            description:
              "Full animated cycle graphic illustrating the Teaching & Learning process with clear, accessible visual flow.",
          },
        ]}
      />
    </div>
  );
}
