import React from "react";
import Card from "./Card";
import Slider1 from "@/images/slider1.png";
import Slider2 from "@/images/slider2.png";
import Slider3 from "@/images/slider3.png";
export default function CardArea() {
  return (
    <div className="container" style={{ marginTop: 500 }}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   mx-auto p-2 flex justify-items-center items-center">
        <Card
          title="Yazılım Eğitimleri"
          content="This is the content of card 1."
          image={Slider1}
        />

        <Card
          title="Sektör Tanıtımları"
          content="This is the content of card 1."
          image={Slider2}
        />

        <Card
          title="Etkinlik Takvimi"
          content="This is the content of card 1."
          image={Slider3}
        />
      </div>
    </div>
  );
}
