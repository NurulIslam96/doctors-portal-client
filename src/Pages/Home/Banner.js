import React from "react";
import chair from "../../assets/images/chair.png";
import bannerBg from "../../assets/images/bg.png";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BannerItems from "./BannerItems";

const Banner = () => {
    //Data For MongoDB
  const bannerItems = [
    {
      title: "Opening Hours",
      icon: `${clock}`,
      description: "Lorem Ipsum is simply dummy text of the pri",
      bgCls: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      title: "Visit our Location",
      icon: `${marker}`,
      description: "Brooklyn, NY 10036, United States",
      bgCls: "bg-slate-700",
    },
    {
      title: "Contact us now",
      icon: `${phone}`,
      description: "+000 123 456789",
      bgCls: "bg-gradient-to-r from-secondary to-primary",
    },
  ];

  return (
    <div>
      <div
        className="hero h-[650px] "
        style={{
          backgroundImage: `url(${bannerBg})`,
          boxShadow: "0 0 8px 8px white inset",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="" className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6 backdrop-blur-xl">
        {bannerItems.map((item) => (
          <BannerItems key={item.title} item={item}></BannerItems>
        ))}
      </div>
    </div>
  );
};

export default Banner;
