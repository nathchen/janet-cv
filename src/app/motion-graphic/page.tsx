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
          { title: "Countdown (3 min)", thumbnail:"/motion-graphic/countdown-3min.png", imageSrc: "/motion-graphic/countdown-3min.mp4", popup: true },
          { title: "Animation Screen",thumbnail:"/motion-graphic/animation-screen.png", imageSrc: "/motion-graphic/animation-screen.mp4", popup: true },
          { title: "CR Tech 7–8 MFAE Slide", imageSrc: "/motion-graphic/cr-tech7-8-m3-l5-mfae-slide1-a-noprocess.gif", popup: true },
          { title: "EL 1", imageSrc: "/motion-graphic/el-1.gif", popup: true },
          { title: "EL 2", imageSrc: "/motion-graphic/el-2.gif", popup: true },
          { title: "Rise Course CRM", imageSrc: "/motion-graphic/rise-course-crm.gif", popup: true },
          { title: "Rise Course CRM 2", imageSrc: "/motion-graphic/rise-course-crm-2.gif", popup: true },
          { title: "Scrolling Page", imageSrc: "/motion-graphic/scrolling-page-noprocess.gif", popup: true },
          { title: "Styling Math Rise", imageSrc: "/motion-graphic/styling-math-rise.gif", popup: true },
          { title: "Teaching & Learning Cycle", imageSrc: "/motion-graphic/teaching-learning-cycle-all.gif", popup: true },
          
        ]}
      />
    </div>
  );
}


