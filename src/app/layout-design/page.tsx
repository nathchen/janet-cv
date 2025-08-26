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
          {title:"aliance_fiance_golf.png", imageSrc: "/layout-design/aliance_fiance_golf.png", popup: true },
          {title:"real-estate1.png", imageSrc: "/layout-design/real-estate1.png", popup: true },
          {title:"aliance_fiance_booklet.png", imageSrc: "/layout-design/aliance_fiance_booklet.png", popup: true },
          {title:"WSI_ALL.png", imageSrc: "/layout-design/WSI_ALL.png", popup: true },
          {title:"SaraLee_Mag_AD_1.png", imageSrc: "/layout-design/SaraLee_Mag_AD_1.png", popup: true },
          {title:"3P_progressKit_img.png", imageSrc: "/layout-design/3P_progressKit_img.png", popup: true },
          {title:"wb-mx.png", imageSrc: "/layout-design/wb-mx.png", popup: true },
          {title:"Assets_MockUP_Virtual_TransitionPack.png", imageSrc: "/layout-design/Assets_MockUP_Virtual_TransitionPack.png", popup: true },
          {title:"NC_ActivityPack_MX_Assets.png", imageSrc: "/layout-design/NC_ActivityPack_MX_Assets.png", popup: true },
          {title:"Pack_mockup_470px_OP.png", imageSrc: "/layout-design/Pack_mockup_470px_OP.png", popup: true },
          {title:"resources-mathematics-reflection-portfolio.png", imageSrc: "/layout-design/resources-mathematics-reflection-portfolio.png", popup: true },
          {title:"BTS_MX_Mockup_2022.png", imageSrc: "/layout-design/BTS_MX_Mockup_2022.png", popup: true },
          {title:"BTS_REGGs_Mockup_2022.png", imageSrc: "/layout-design/BTS_REGGs_Mockup_2022.png", popup: true },
          {title:"process-map-infographic.jpg", imageSrc: "/layout-design/process-map-infographic.jpg", popup: true },
          {title:"IAC_Cert.jpg", imageSrc: "/layout-design/IAC_Cert.jpg", popup: true },
          {title:"guidelines_EL.jpg", imageSrc: "/layout-design/guidelines_EL.jpg", popup: true },
        ]}
      />
    </div>
  );
}


