import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Digital Design"
        subtitle="Web, social, and campaign visuals optimized for screens."
      />
      <CardGrid
        items={[
          {title:"OS_DisplayBanner_970x250.gif", imageSrc: "/digital-design/OS_DisplayBanner_970x250.gif", popup: true },
          {title:"AMER_3P_ED_Session_DrMSmall_1080x1080-4.jpg", imageSrc: "/digital-design/AMER_3P_ED_Session_DrMSmall_1080x1080-4.jpg", popup: true },
          {title:"EMEA-RE-Phonics-Starter-Pack.jpg", imageSrc: "/digital-design/EMEA-RE-Phonics-Starter-Pack.jpg", popup: true },
          {title:"EMEA_MX-ISP_FB_Social_2021.jpg", imageSrc: "/digital-design/EMEA_MX-ISP_FB_Social_2021.jpg", popup: true },
          {title:"EMEA_MX_Homework_BOFU_1080x1080px_2021-2.jpg", imageSrc: "/digital-design/EMEA_MX_Homework_BOFU_1080x1080px_2021-2.jpg", popup: true },
          {title:"APAC_Reggs_FillLearningGaps_1080x1080_2021-1-a.jpg", imageSrc: "/digital-design/APAC_Reggs_FillLearningGaps_1080x1080_2021-1-a.jpg", popup: true },
          {title:"AMER_Review_MX_WB_1080x1080_2021-2.jpg", imageSrc: "/digital-design/AMER_Review_MX_WB_1080x1080_2021-2.jpg", popup: true },
          {title:"Fast-Phonics-BOFU-1.png", imageSrc: "/digital-design/Fast-Phonics-BOFU-1.png", popup: true },
          {title:"APAC_OCT_BOFU_REGGS_INST_2020_V1.jpg", imageSrc: "/digital-design/APAC_OCT_BOFU_REGGS_INST_2020_V1.jpg", popup: true },
          {title:"APAC_Sept_BOFU_WF_Insta_V7.jpg", imageSrc: "/digital-design/APAC_Sept_BOFU_WF_Insta_V7.jpg", popup: true },
          {title:"MX_JUNE_Bofu_INT_1080x1080_2020_V1.jpg", imageSrc: "/digital-design/MX_JUNE_Bofu_INT_1080x1080_2020_V1.jpg", popup: true },
          {title:"APAC_3P_Stem_CER_Insta_1080x1080_v1.jpg", imageSrc: "/digital-design/APAC_3P_Stem_CER_Insta_1080x1080_v1.jpg", popup: true },
        ]}
      />
    </div>
  );
}


