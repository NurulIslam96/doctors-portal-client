import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({ appointmentOpt, selectDate }) => {
  const { name, slots } = appointmentOpt;
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-7 text-slate-800">{name}</h3>
          <form>
            <input
              type="text"
              value={format(selectDate, "PP")}
              disabled
              className="input input-bordered w-full my-3 text-black"
            />
            <select className="select select-bordered w-full my-3 text-slate-800">
              {
                slots?.map(slot => <option value={slot} key={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full my-3"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full my-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full my-3"
            />
            <input
              type="submit"
              value={'Submit'}
              className="input input-bordered w-full my-3 cursor-pointer bg-neutral text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
