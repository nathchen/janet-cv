import PageHeader from "@/components/PageHeader";
import CardGrid from "@/components/CardGrid";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="POS (Point of Sale) Design"
        subtitle="In-store displays that attract attention and drive conversions."
      />
      <CardGrid
        items={[
          {title:"WMD_Trophy2018.png", imageSrc: "/pos-design/WMD_Trophy2018.png", popup: true },
          {title:"photo_en_D.png", imageSrc: "/pos-design/photo_en_D.png", popup: true },
          {title:"WSI_Pullup.png", imageSrc: "/pos-design/WSI_Pullup.png", popup: true },
          {title:"Click_PullUP.png", imageSrc: "/pos-design/Click_PullUP.png", popup: true },
          {title:"pull-up.png", imageSrc: "/pos-design/pull-up.png", popup: true },
          {title:"Sara_PullUP.png", imageSrc: "/pos-design/Sara_PullUP.png", popup: true },
          {title:"Saralee_Pro_mobile.png", imageSrc: "/pos-design/Saralee_Pro_mobile.png", popup: true },
          {title:"Campari_poster.png", imageSrc: "/pos-design/Campari_poster.png", popup: true },
          {title:"Sky_Vodka_bannerwall.png", imageSrc: "/pos-design/Sky_Vodka_bannerwall.png", popup: true },
          {title:"Campari_bottleBox.png", imageSrc: "/pos-design/Campari_bottleBox.png", popup: true },
          {title:"Sky_Vodka_promo.png", imageSrc: "/pos-design/Sky_Vodka_promo.png", popup: true },
        ]}
      />
    </div>
  );
}


