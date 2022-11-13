import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import BookAppointment from "./BookAppointment";

const Appointment = () => {
    const [selectDate , setSelectDate] = useState(new Date())
  return (
    <div>
      <AppointmentBanner
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      ></AppointmentBanner>
      <BookAppointment
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      ></BookAppointment>
    </div>
  );
};

export default Appointment;
