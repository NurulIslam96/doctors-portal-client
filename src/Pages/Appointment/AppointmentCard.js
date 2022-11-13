import React from "react";

const AppointmentCard = ({ appointment, setAppointmentOpt }) => {
  const { name, slots } = appointment;
  return (
    <div className="card md:w-[425px] w-full md:h-[235px] h-auto bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="font-semibold text-xl text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Look for the next day"}</p>
        <p>
          {slots.length} {slots.length > 0 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            onClick={() => setAppointmentOpt(appointment)}
            className="btn bg-gradient-to-r from-primary to-secondary text-white font-bold btn-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
