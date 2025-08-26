import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="UI/UX Design"
        subtitle="Interfaces and experiences that are intuitive, elegant, and accessible."
      />
      <CardGrid
        items={[
          {
            title: "3P Learning – Professional Learning Services",
            imageSrc: "/ui-ux/3p_learning_Professional_learning_services_web_design.jpg",
            popup: true,
            description: "Marketing site UX for professional development services with clear IA.",
          },
          {
            title: "Activity UI",
            imageSrc: "/ui-ux/activity.jpg",
            popup: true,
            description: "Task flow focusing on simplicity and quick completion.",
          },
          {
            title: "Live Mathletics UI",
            imageSrc: "/ui-ux/live_mathletics_ui_design.jpg",
            popup: true,
            description: "Real‑time progress and engagement widgets for students.",
          },
          {
            title: "Mathletics MX",
            imageSrc: "/ui-ux/mx.jpg",
            popup: true,
            description: "Localized interface and typography for the MX market.",
          },
          {
            title: "Security Console",
            imageSrc: "/ui-ux/sec_console-all.png",
            popup: true,
            description: "Admin console with audit views and role‑based controls.",
          },
          {
            title: "Spello Console",
            imageSrc: "/ui-ux/spello-console-all.jpg",
            popup: true,
            description: "Teacher dashboard for managing content and results.",
          },
          {
            title: "Spello UI",
            imageSrc: "/ui-ux/spello.jpg",
            popup: true,
            description: "Practice interface optimized for readability and speed.",
          },
          {
            title: "Weg UI",
            imageSrc: "/ui-ux/weg.jpg",
            popup: true,
            description: "Landing page with conversion‑focused layout and CTAs.",
          },
          {
            title: "World Maths Day UI",
            imageSrc: "/ui-ux/world_maths_day_ui_design.jpg",
            popup: true,
            description: "Event microsite with festive visuals and simple signup.",
          },
        ]}
      />
    </div>
  );
}


