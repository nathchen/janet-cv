import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Infographic Design"
        subtitle="Data visualisations that communicate clearly and beautifully."
      />
      <CardGrid
        items={[
          {
            title: "Old Kingdom Egypt Map – HSIE",
            imageSrc: "/infographic/hsie_history_1_old-kingdom-egypt-map.jpg",
            popup: true,
            description:
              "Infographic map of the Old Kingdom in Egypt, designed for HSIE Year 7 history content.",
          },
          {
            title: "Giza Plateau Map – HSIE",
            imageSrc: "/infographic/hsie_history_3_gizaplateau.jpg",
            popup: true,
            description:
              "Detailed infographic designed for HSIE history worksheets on the Giza Plateau.",
          },
          {
            title: "King Empire Timeline – HSIE",
            imageSrc: "/infographic/hsie-history-king_timeline.jpg",
            popup: true,
            description:
              "Timeline infographic simplifying key empires for HSIE history lessons.",
          },
          {
            title: "Geography Process Infographic",
            imageSrc: "/infographic/HSIE_Geo-info-graphics2.jpg",
            popup: true,
            description:
              "Step-by-step infographic created for HSIE geography PPTX content.",
          },
          {
            title: "Geography Concept Infographic 2",
            imageSrc: "/infographic/HSIE_Geo-info-graphics.jpg",
            popup: true,
            description:
              "Visual guide designed for HSIE geography worksheets, using simplified numbered icons.",
          },
          {
            title: "Biome Infographic 1 – HSIE",
            imageSrc: "/infographic/HSIE_Geo-image-Biomes1.jpg",
            popup: true,
            description:
              "Infographic showing biome layers and key traits, created for HSIE lesson slides.",
          },
          {
            title: "Biome Infographic 2 – HSIE",
            imageSrc: "/infographic/HSIE_Geo-image-Biomes2.jpg",
            popup: true,
            description:
              "Triangle-style biome infographic with environmental details for HSIE learning materials.",
          },
          {
            title: "Biome Infographic 3 – HSIE",
            imageSrc: "/infographic/HSIE_Geo-image-Biomes3.jpg",
            popup: true,
            description:
              "Landscape infographic of biomes with climate and vegetation, created for HSIE worksheets.",
          },
          {
            title: "EIC Infographic – Evaluative Inquiry Cycle",
            imageSrc: "/infographic/eic_infographic.png",
            popup: true,
            description:
              "Hexagon infographic illustrating the Evaluative Inquiry Cycle, showing the interconnected stages of the process.",
          },
          {
            title: "Testing Protocol Infographic",
            imageSrc: "/infographic/tc.png",
            popup: true,
            description:
              "Circular infographic outlining testing protocols and feedback cycles.",
          },
          {
            title: "PLAN 2 Infographic",
            imageSrc: "/infographic/plan2.png",
            popup: true,
            description:
              "Step-based infographic visualising the PLAN 2 framework for teaching guidance.",
          },
          {
            title: "Periodic Table",
            imageSrc: "/infographic/periodic-table.png",
            popup: true,
            description:
              "Periodic table infographic created for STEM lesson resources.",
          },
          {
            title: "12 Practices Infographic – STEMscopes",
            imageSrc: "/infographic/stemscopes-12-practices.png",
            popup: true,
            description:
              "Poster infographic of 12 core STEM practices, formatted.",
          },
          {
            title: "Mind Growth Diagram",
            imageSrc: "/infographic/Reggs-MX-MS-mindgrowth.png",
            popup: true,
            description:
              "Growth-mindset style infographic created as a client resource for Mathletics, Reading Eggs, and Mathseeds.",
          },
          {
            title: "Mathletics Step Community Infographic",
            imageSrc: "/infographic/mx-step-community.png",
            popup: true,
            description:
              "Infographic visualising the Mathetics global community, created for learning modules.",
          },

          {
            title: "Diversity Infographic",
            imageSrc: "/infographic/diversity-infographic.png",
            popup: true,
            description:
              "Infographic illustrating diversity and representation with accessible visuals.",
          },

          {
            title: "Flip Infographic – Module Resource",
            imageSrc: "/infographic/flip-infographic.png",
            popup: true,
            description:
              "Infographic created for a module with a flip design, showing visuals on the front and descriptions on the back.",
          },
        ]}
      />
    </div>
  );
}
