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
          {
            title: "Racism Module Illustration",
            imageSrc: "/illustration/illus-abor.jpg",
            popup: true,
            description:
              "Illustration created for a Racism module, supporting sensitive content with clear, accessible visuals.",
          },
          {
            title: "Early Learning Module Illustrations",
            imageSrc: "/illustration/illus-earlyed.jpg",
            popup: true,
            description:
              "Set of play-based illustrations created for Early Learning modules, designed to support playful and engaging content.",
          },
          {
            title: "PLAN2 Module Illustrations",
            imageSrc: "/illustration/illus-plan2.jpg",
            popup: true,
            description:
              "Illustration set created for PLAN2 module content, supporting step-by-step guidance.",
          },
          {
            title: "De-escalation Module Illustration 1",
            imageSrc: "/illustration/illus-des1.png",
            popup: true,
            description:
              "Scenario-based illustration created for a De-escalation module, showing how to handle challenging situations.",
          },
          {
            title: "De-escalation Module Illustration 2",
            imageSrc: "/illustration/illus-des2.jpg",
            popup: true,
            description:
              "Second scenario illustration created for a De-escalation module, aligning with learner context.",
          },
          {
            title: "Change Management Module Illustration",
            imageSrc: "/illustration/illus-changeM.jpg",
            popup: true,
            description:
              "Illustration for a Change Management module, created to visualise organisational processes.",
          },
          {
            title: "HSIE Geography – WATCHES Illustration",
            imageSrc: "/illustration/hsie-watches-geo.jpg",
            popup: true,
            description:
              "Illustration for HSIE Geography PPTX, paired with student activities and questions.",
          },

          {
            title: "Technology Module Illustration 1 (Year 7–10)",
            imageSrc: "/illustration/illus-tech1.jpg",
            popup: true,
            description:
              "Illustration created for Technology Years 7–10 module, designed to support clarity and engagement.",
          },
          {
            title: "Technology Module Illustration 2 (Year 7–10)",
            imageSrc: "/illustration/illus-tech2.jpg",
            popup: true,
            description:
              "Alternate style illustration for Technology Years 7–10 module, adapting visuals for varied content needs.",
          },

          {
            title: "Technology Module Illustration 3 (Year 7–8)",
            imageSrc: "/illustration/illus-tech3.jpg",
            popup: true,
            description:
              "Illustration for Technology Years 7–8 module, designed to complement curriculum activities.",
          },
          {
            title: "Technology Module Illustration 4 (Year 7–8)",
            imageSrc: "/illustration/illus-tech4.jpg",
            popup: true,
            description:
              "Scenario-based Technology Years 7–8 module illustration, aligned with instructional content.",
          },
          {
            title: "Technology Module Illustration 5 (Year 7–8)",
            imageSrc: "/illustration/illus-tech5.jpg",
            popup: true,
            description:
              "Additional Technology Years 7–8 module illustration, created to accommodate diverse learning contexts.",
          },
        ]}
      />
    </div>
  );
}
