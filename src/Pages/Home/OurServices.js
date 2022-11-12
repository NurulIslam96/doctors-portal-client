import React from "react";
import flouride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const OurServices = () => {
  const hmService = [
    {
      id: "1",
      title: "Fluoride Treatment",
      icon: `${flouride}`,
    },
    {
      id: "2",
      title: "Cavity Filling",
      icon: `${cavity}`,
    },
    {
      id: "3",
      title: "Teeth Whitening",
      icon: `${whitening}`,
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h4 className="text-xl font-bold text-secondary">OUR SERVICES</h4>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="flex justify-between md:flex-row flex-col mt-14 gap-8">
        {hmService.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="hero my-40">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="flex justify-center mb-14">
            <img
              src={treatment}
              className="rounded-lg md:place-self-end md:h-[576px] md:w-[458px] h-[406px] w-[322px]"
              alt="treatment"
            />
          </div>
          <div className="w-2/3">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
