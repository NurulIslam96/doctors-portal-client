import React from "react";
import chair from "../../assets/images/chair.png";
import bannerBg from "../../assets/images/bg.png";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Banner = () => {
  const bannerItems = [
    {
      title: "Opening Hours",
      icon: `${clock}`,
      description: "Lorem Ipsum is simply dummy text of the pri",
      bgCls: "bg-gradient-to-r from-secondary to-primary"
    },
    {
      title: "Visit our Location",
      icon: `${marker}`,
      description: "Brooklyn, NY 10036, United States",
      bgCls: "bg-slate-700"
    },
    {
      title: "Contact us now",
      icon: `${phone}`,
      description: "+000 123 456789",
      bgCls: "bg-gradient-to-r from-secondary to-primary"
    },
  ];

  return (
    <div>
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundPosition: "center",
          backgroundSize: "content",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="" className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white font-bold btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6">
        {bannerItems.map((item) => (
          <div
            key={item.title}
            item={item}
            className={`card md:w-1/3 w-full ${item.bgCls} text-white`}
          >
            <div className="flex items-center h-48 mx-6">
              <div>{item.title}</div>
              <div>
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
