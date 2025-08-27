import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Digital Design"
        subtitle="Web, social, and campaign visuals optimised for screens."
      />
      <CardGrid
        items={[
          {
            title: "Opportunity Class Entry Banner",
            imageSrc: "/digital-design/oc_dnanner_970x250.gif",
            popup: true,
            description:
              "Social display banner promoting Opportunity Class entry, optimized for web.",
          },
          {
            title: "Overcoming Math Anxiety – Event Promotio",
            imageSrc: "/digital-design/amer_3p_ed_session.jpg",
            popup: true,
            description:
              "Event promo graphic for a professional learning session with Dr Marian Small.",
          },
          {
            title: "ISP Maths Challenge – Social Post",
            imageSrc: "/digital-design/emea-isp_fb_social_2021.jpg",
            popup: true,
            description:
              "Social post encouraging registrations for the ISP Maths Challenge.",
          },
          {
            title: "Mathletics K–8 Workbooks – Social Post",
            imageSrc: "/digital-design/amer_review_mx_wb.jpg",
            popup: true,
            description: "Social post promoting Mathletics K–8 workbooks.",
          },
          {
            title: "Homework Engagement (Mathletics) – BOFU Social Post",
            imageSrc: "/digital-design/emea_mx_homework_bofu.jpg",
            popup: true,
            description:
              "Social post highlighting homework features to drive engagement.",
          },
          {
            title: "Tracking Progress Made Simple (Mathletics) – Social Post",
            imageSrc: "/digital-design/mx_bofu_insta.jpg",
            popup: true,
            description:
              "Social post showcasing Mathletics’ progress-tracking features.",
          },
          {
            title: "Phonics Starter Pack (Reading Eggs) – Social Post",
            imageSrc: "/digital-design/emea-re-phonics-starter-pack.jpg",
            popup: true,
            description:
              "Social post promoting the Reading Eggs Phonics Starter Pack.",
          },
          {
            title: "Fast Phonics – BOFU Social Post",
            imageSrc: "/digital-design/fp_bofu.png",
            popup: true,
            description: "Social post driving conversion for Fast Phonics.",
          },
          {
            title: "Reading Gaps (Reading Eggs) – Social Post",
            imageSrc: "/digital-design/apac_reggs_flg.jpg",
            popup: true,
            description:
              "Social post highlighting tools to identify and address reading gaps.",
          },
          {
            title: "Explore & Excite with Reading Eggs – Social Post",
            imageSrc: "/digital-design/apac_reggs.jpg",
            popup: true,
            description:
              "Social post for the “Explore & Excite with Reading Eggs” campaign.",
          },
          {
            title: "WordFlyers – Social Post",
            imageSrc: "/digital-design/apac_sept_wf_Insta.jpg",
            popup: true,
            description:
              "Social post promoting WordFlyers with bold, platform-consistent visuals.",
          },
          {
            title: "STEMscopes – Social Post",
            imageSrc: "/digital-design/apac_3p_stem.jpg",
            popup: true,
            description:
              "Social post promoting STEMscopes with clear, accessible layout.",
          },
        ]}
      />
    </div>
  );
}
