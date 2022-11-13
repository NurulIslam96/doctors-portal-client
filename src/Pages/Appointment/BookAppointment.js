import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

const BookAppointment = ({ selectDate }) => {
  const [appointments, setAppointments] = useState([]);
  const [appointmentOpt, setAppointmentOpt] = useState({});

  useEffect(() => {
    fetch("data-appointment.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div>
      <p className="text-center text-secondary text-2xl mt-10 md:px-0 px-5">
        Available Appointments on {format(selectDate, "PP")}
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8 md:my-24 my-16 md:mx-0 mx-3">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
            setAppointmentOpt={setAppointmentOpt}
          ></AppointmentCard>
        ))}
      </div>
      <AppointmentModal
        appointmentOpt={appointmentOpt}
        selectDate={selectDate}
      ></AppointmentModal>
    </div>
  );
};

export default BookAppointment;
