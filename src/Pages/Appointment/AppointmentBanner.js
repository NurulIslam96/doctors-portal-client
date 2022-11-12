import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import bannerBg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <div>
      <div
        className="hero h-[650px]"
        style={{
          backgroundImage: `url(${bannerBg})`,
          boxShadow: "0 0 100px 100px white inset",
        }}
      >
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <img
            src={chair}
            alt=""
            className="md:w-1/2 w-full rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectDate}
              onSelect={setSelectDate}
            ></DayPicker>
          </div>
        </div>
      </div>
      <p className="text-center text-secondary text-2xl mt-10">Available Appointments on {format(selectDate, "PP")}</p>
    </div>
  );
};

export default AppointmentBanner;
