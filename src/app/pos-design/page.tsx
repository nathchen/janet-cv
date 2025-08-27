import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="POS Design"
        subtitle="In-store displays that attract attention and drive conversions."
      />
      <CardGrid
        items={[
          {
            title: "World Maths Day Trophy Display",
            imageSrc: "/pos-design/WMD_Trophy2018.png",
            popup: true,
            description:
              "In-store style display trophy design for World Maths Day 2018, created to attract attention at events.",
          },
          {
            title: "Click conveyancing Pull-Up Banner",
            imageSrc: "/pos-design/click_pullup.png",
            popup: true,
            description:
              "Pull-up banner design for Conveyancing.com.au, created to promote services with a professional and bold presence.",
          },
          {
            title: "Mathletics Pull-Up Banner",
            imageSrc: "/pos-design/mx-pull-up.png",
            popup: true,
            description:
              "Pull-up banner design for Mathletics, showcasing key program features for events and promotions.",
          },
          {
            title: "Sara Lee Pull-Up Banner",
            imageSrc: "/pos-design/sara_pullup.png",
            popup: true,
            description:
              "Retail pull-up banner design for Sara Lee, promoting products with clean and engaging visuals.",
          },
          {
            title: "WSI Pull-Up Banner",
            imageSrc: "/pos-design/wsi-pullup.png",
            popup: true,
            description:
              "Pull-up banner design for WSI, created to promote services with a strong and professional style.",
          },
          {
            title: "Campari Poster",
            imageSrc: "/pos-design/campari_poster.png",
            popup: true,
            description:
              "Black and white promotional poster for Campari, designed with a high-impact visual style.",
          },
          {
            title: "Skyy Vodka Banner Wall",
            imageSrc: "/pos-design/sky_vodka_bannerwall.png",
            popup: true,
            description:
              "Large-format banner wall for Skyy Vodka, created for use in promotional events and retail displays.",
          },
          {
            title: "Campari Bottle Box",
            imageSrc: "/pos-design/campari_bottleBox.png",
            popup: true,
            description:
              "Point-of-sale packaging box for Campari, designed to maximise shelf impact.",
          },
          {
            title: "Sara Lee Product Hanger Display",
            imageSrc: "/pos-design/saralee_pro_mobile.png",
            popup: true,
            description:
              "Mobile POS hanger for Sara Lee products, designed for retail shelf displays.",
          },

          {
            title: "Skyy Vodka Counter Display",
            imageSrc: "/pos-design/sky_vodka_promo.png",
            popup: true,
            description:
              "Promotional counter display for Skyy Vodka, designed to attract customer attention at checkout.",
          },
          {
            title: "Wild Turkey Bottle Photo Enhancement",
            imageSrc: "/pos-design/photo_en.png",
            popup: true,
            description:
              "Enhanced and retouched product photography for Wild Turkey, optimised for promotional and POS use.",
          },
        ]}
      />
    </div>
  );
}
