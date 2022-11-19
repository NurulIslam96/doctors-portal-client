// import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({selectDate, setSelectDate}) => {
  return (
    <div>
      <div
        className="hero h-[650px] banner"
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
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
