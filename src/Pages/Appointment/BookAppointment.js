import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

const BookAppointment = ({ selectDate }) => {
  const [appointmentOpt, setAppointmentOpt] = useState({});
  const date = format(selectDate, "PP");

  const { data: appointments = [], refetch } = useQuery({
    queryKey: ["appointments", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointments?date=${date}`).then((res) =>
        res.json()
      ),
  });

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
        setAppointmentOpt={setAppointmentOpt}
        appointmentOpt={appointmentOpt}
        selectDate={selectDate}
        refetch={refetch}
      ></AppointmentModal>
    </div>
  );
};

export default BookAppointment;
