import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Layout Design"
        subtitle="Editorial layouts that balance typography, grid, and hierarchy."
      />
      <CardGrid
        items={[
          {
            title: "Early Learning Guidelines",
            imageSrc: "/layout-design/guidelines_el.jpg",
            popup: true,
            description:
              "Guidelines booklet layout for Early Learning, designed with readability and accessibility in mind.",
          },
          {
            title: "Process Map Infographic (Education)",
            imageSrc: "/layout-design/process-map-infographic.jpg",
            popup: true,
            description:
              "Process map infographic layout, visualising workflows for clarity and ease of reference.",
          },
          {
            title: "IAC Certificate Design",
            imageSrc: "/layout-design/iac-cert.jpg",
            popup: true,
            description:
              "Certificate layout for the International Arts Competition, balancing formal design with clear hierarchy.",
          },
          {
            title: "Mathletics Workbook",
            imageSrc: "/layout-design/wb-mx.png",
            popup: true,
            description:
              "Workbook layout design for Mathletics, with structured grids for clarity and usability",
          },
          {
            title: "Mathletics November Numeracy Activity Pack",
            imageSrc: "/layout-design/nc_activityPack_mx_assets.png",
            popup: true,
            description:
              "Layout design for the Mathletics November Numeracy Activity Pack, integrating illustrations with structured worksheets.",
          },
          {
            title: "Mathletics Reflection Portfolio",
            imageSrc:
              "/layout-design/resources-mathematics-reflection-portfolio.png",
            popup: true,
            description:
              "Portfolio layout for Mathematics reflection activities, designed for student engagement.",
          },
          {
            title: "Back-to-School Pack – Mathletics",
            imageSrc: "/layout-design/bts_mx_2022.png",
            popup: true,
            description:
              "Pack layout design for Mathletics Back-to-School campaign, supporting classroom resources.",
          },

          {
            title: "Back-to-School Pack – Mathseeds",
            imageSrc: "/layout-design/pack_mockup_470px.png",
            popup: true,
            description:
              "Pack layout design for Mathseeds Back-to-School campaign, supporting classroom resources.",
          },

          {
            title: "Back-to-School Pack – Reading Eggs",
            imageSrc: "/layout-design/bts_reggs_2022.png",
            popup: true,
            description:
              "Pack layout design for Reading Eggs Back-to-School campaign, created for teachers and parents.",
          },
          {
            title: "3P Student Progress Toolkit",
            imageSrc: "/layout-design/3p_progressKit_img.png",
            popup: true,
            description:
              "Layout design for the Student Progress Toolkit, created to help teachers track and support student learning.",
          },

          {
            title: "3P Learning – Extraordinary General Meeting Statement",
            imageSrc: "/layout-design/assets_vtp.png",
            popup: true,
            description:
              "Explanatory Statement design for 3P Learning’s shareholder meeting on the Blake eLearning merger.",
          },

          {
            title: "Alliance Finance – Golf Day Program",
            imageSrc: "/layout-design/aliance_fiance_golf.png",
            popup: true,
            description:
              "Layout design for Alliance Finance Golf Day program, combining clear typography with event branding.",
          },

          {
            title: "Alliance Finance – Booklet",
            imageSrc: "/layout-design/aliance_fiance_booklet.png",
            popup: true,
            description:
              "Booklet layout for Alliance Finance, designed with a structured grid and professional visual hierarchy.",
          },
          {
            title: "Real Estate Brochure",
            imageSrc: "/layout-design/real-estate1.png",
            popup: true,
            description:
              "Brochure layout for a real estate campaign, featuring strong imagery and modern typography.",
          },

          {
            title: "WSI Course Book",
            imageSrc: "/layout-design/wsi_coursebook.png",
            popup: true,
            description:
              "Course book layout designed for Western Sydney Institute, structured for clarity and student use.",
          },
          {
            title: "Sara Lee Magazine Ad",
            imageSrc: "/layout-design/saraLee_mag_ad_1.png",
            popup: true,
            description:
              "Magazine advertisement layout for Sara Lee, balancing product imagery and promotional messaging.",
          },
        ]}
      />
    </div>
  );
}
