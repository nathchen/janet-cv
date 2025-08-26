import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Illustration"
        subtitle="Playful and expressive visuals across styles and mediums."
      />
      <CardGrid
        items={[
          {title:"illus-abor.jpg", imageSrc: "/illustration/illus-abor.jpg", popup: true },
          {title:"illus-earlyed.jpg", imageSrc: "/illustration/illus-earlyed.jpg", popup: true },
          {title:"illus-plan2.jpg", imageSrc: "/illustration/illus-plan2.jpg", popup: true },
          {title:"illus-tech1.jpg", imageSrc: "/illustration/illus-tech1.jpg", popup: true },
          {title:"illus-tech2.jpg", imageSrc: "/illustration/illus-tech2.jpg", popup: true },
          {title:"illus-des1.jpg", imageSrc: "/illustration/illus-des1.jpg", popup: true },
          {title:"illus-des2.jpg", imageSrc: "/illustration/illus-des2.jpg", popup: true },
          {title:"illus-tech3.jpg", imageSrc: "/illustration/illus-tech3.jpg", popup: true },
          {title:"illus-tech4.jpg", imageSrc: "/illustration/illus-tech4.jpg", popup: true },
          {title:"illus-tech5.jpg", imageSrc: "/illustration/illus-tech5.jpg", popup: true },
          {title:"illus-changeM.jpg", imageSrc: "/illustration/illus-changeM.jpg", popup: true },
        ]}
      />
    </div>
  );
}


