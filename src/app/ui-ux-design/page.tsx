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
            title: "Secondary Mathematics Styling",
            imageSrc: "/ui-ux/crm-sc-sm.png",
            popup: true,
            description:
              "Worked on the Secondary Mathematics module UI design with accessible visuals.",
          },
          {
            title: "Early Learning Nano Module",
            imageSrc: "/ui-ux/crm-el-1.png",
            popup: true,
            description:
              "Contributed to 19 Early Learning Nano modules (Groups 5, 7, 9). Shown here as a monitor display of one module.",
          },
          {
            title: "English Module",
            imageSrc: "/ui-ux/crm-english.png",
            popup: true,
            description:
              "Worked on the English Year 7–10 module, shown here as a monitor display.",
          },
          {
            title: "3P Learning website",
            imageSrc:
              "/ui-ux/3p_learning_Professional_learning_services_web_design.jpg",
            popup: true,
            description:
              "Designed and built in WordPress with custom CSS/JavaScript for branding and accessibility-focused structure.",
          },
          {
            title: "Activity Console",
            imageSrc: "/ui-ux/activity.jpg",
            popup: true,
            description:
              "Designed the Activity Console with a pop-up calculator and question graphics, supplying assets and CSS for developers.",
          },
          {
            title: "Live Mathetics Console",
            imageSrc: "/ui-ux/live_mathletics_ui_design.jpg",
            popup: true,
            description:
              "Redesigned the Live Mathletics Console, delivering assets and CSS for developer build.",
          },
          {
            title: "Mathetics MX Website",
            imageSrc: "/ui-ux/mx.jpg",
            popup: true,
            description:
              "Built in WordPress with localized UI, using CSS/JavaScript for branding consistency and accessibility.",
          },
          {
            title: "Mathletics Secondary Console",
            imageSrc: "/ui-ux/sec_console-all.png",
            popup: true,
            description:
              "Designed the Secondary Console, supplying assets and CSS for developers to implement.",
          },
          {
            title: "Spellodrome Console",
            imageSrc: "/ui-ux/spello-console-all.jpg",
            popup: true,
            description:
              "Designed the Spellodrome student console, including all game assets and CSS supplied for developers to build.",
          },
          {
            title: "Spellodrome Website",
            imageSrc: "/ui-ux/spello.jpg",
            popup: true,
            description:
              "WordPress site designed and built with CSS/JavaScript customisation for branding and accessibility.",
          },
          {
            title: "Weg Website",
            imageSrc: "/ui-ux/weg.jpg",
            popup: true,
            description:
              "Landing page built in WordPress with conversion-focused layout, styled with CSS/JavaScript for branding and accessibility.",
          },
          {
            title: "World Maths Day Website",
            imageSrc: "/ui-ux/world_maths_day_ui_design.jpg",
            popup: true,
            description:
              "Designed and built the World Maths Day website in WordPress for the annual global event where students compete live in maths games.",
          },
        ]}
      />
    </div>
  );
}
