import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Infographic Design"
        subtitle="Data visualizations that communicate clearly and beautifully."
      />
      <CardGrid
        items={[
          { title: "HSIE_History_3_Giza-Plateau-.jpg", imageSrc: "/infographic/HSIE_History_3_Giza-Plateau-.jpg", popup: true },
          { title: "HSIE_History_1_old-kingdom-egypt-map.jpg", imageSrc: "/infographic/HSIE_History_1_old-kingdom-egypt-map.jpg", popup: true },
          { title: "HSIE_History_2_largescale-map-egypt-giza.jpg", imageSrc: "/infographic/HSIE_History_2_largescale-map-egypt-giza.jpg", popup: true },
          { title: "HSIE_Geo-info-graphics2.jpg", imageSrc: "/infographic/HSIE_Geo-info-graphics2.jpg", popup: true },
          { title: "HSIE_Geo-info-graphics.jpg", imageSrc: "/infographic/HSIE_Geo-info-graphics.jpg", popup: true },
          { title: "HSIE_Geo-image-Biomes3.jpg", imageSrc: "/infographic/HSIE_Geo-image-Biomes3.jpg", popup: true },
          { title: "HSIE_Geo-image-Biomes2.jpg", imageSrc: "/infographic/HSIE_Geo-image-Biomes2.jpg", popup: true },
          { title: "HSIE_Geo-image-Biomes1.jpg", imageSrc: "/infographic/HSIE_Geo-image-Biomes1.jpg", popup: true },
          { title: "HSIE-history-KingEmpire_Timeline.jpg", imageSrc: "/infographic/HSIE-history-KingEmpire_Timeline.jpg", popup: true },
          { title: "HSIE-WATCHES-GEO.jpg", imageSrc: "/infographic/HSIE-WATCHES-GEO.jpg", popup: true },
          { title: "tc.png", imageSrc: "/infographic/tc.png", popup: true },
          { title: "diversity-infographic.png", imageSrc: "/infographic/diversity-infographic.png", popup: true },
          { title: "periodic-table.png", imageSrc: "/infographic/periodic-table.png", popup: true },
          { title: "flip-infographic.png", imageSrc: "/infographic/flip-infographic.png", popup: true },
          { title: "plan-2.png", imageSrc: "/infographic/plan-2.png", popup: true },
          { title: "eic-infographic.png", imageSrc: "/infographic/eic-infographic.png", popup: true },
          { title: "mx-step-community.png", imageSrc: "/infographic/mx-step-community.png", popup: true },
          { title: "mx-21st-infographic.png", imageSrc: "/infographic/mx-21st-infographic.png", popup: true },
          { title: "Reggs-MX-MS-mindgrowth.png", imageSrc: "/infographic/Reggs-MX-MS-mindgrowth.png", popup: true },
          { title: "stemscopes-12-practices.png", imageSrc: "/infographic/stemscopes-12-practices.png", popup: true },
        ]}
      />
    </div>
  );
}


