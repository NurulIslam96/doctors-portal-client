import React from "react";

const BannerItems = ({ item }) => {
    
  const { title, icon, bgCls, description } = item;

  return (
    <div className={`card md:w-1/3 w-full ${bgCls} text-white`}>
      <div className="flex items-center h-48">
        <img src={icon} className="mx-5" alt="" />
        <div>
          <h2 className="card-title">{title}</h2>
          <p className="pr-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerItems;
