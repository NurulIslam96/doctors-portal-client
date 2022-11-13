import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

const BookAppointment = ({ selectDate }) => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("data-appointment.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div>
      <p className="text-center text-secondary text-2xl mt-10">
        Available Appointments on {format(selectDate, "PP")}
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-24">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
          ></AppointmentCard>
        ))}
      </div>
      <AppointmentModal></AppointmentModal>
    </div>
  );
};

export default BookAppointment;
