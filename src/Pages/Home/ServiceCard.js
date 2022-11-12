import React from "react";

const ServiceCard = ({ service }) => {
  const { title, icon } = service;
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={icon} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default ServiceCard;
