import React from "react";
import drsmall from "../../assets/images/doctor-small.png";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import appointment from "../../assets/images/appointment.png";

const Testimonial = () => {
  return (
    <div
      className="hero text-white"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="flex justify-center -mt-28">
          <img
            src={drsmall}
            className="rounded-lg md:place-self-end lg:block hidden"
            alt="doctor-sm"
          />
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-secondary">
            Exceptional Dental Care, on Your Terms
          </h1>
          <h1 className="text-4xl font-semibold">Make an appointment Today</h1>
          <p className="py-6 md:w-3/4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
