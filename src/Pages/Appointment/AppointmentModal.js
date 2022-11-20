import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/Authprovider";

const AppointmentModal = ({ appointmentOpt, selectDate,refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots, price } = appointmentOpt;
  const date = format(selectDate, 'PP');

  const handleBooking = e => {
    e.preventDefault()
    const form = e.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate : date,
      treatment: name,
      patient: patientName,
      email,
      phone,
      slot,
      price
    }
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        toast.success("Booking Confirmed")
        form.reset()
        refetch()
      }else{
        toast.error(data.message)
      }
    })
  }
  
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
          <form onSubmit={handleBooking}>
            <input
              type="text"
              value={format(selectDate, "PP")}
              disabled
              className="input input-bordered w-full my-3 text-black"
            />
            <select name="slot" className="select select-bordered w-full my-3 text-slate-800">
              {slots?.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full my-3"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full my-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              disabled
              className="input input-bordered w-full my-3"
            />
            <input
              type="submit"
              value={"Submit"}
              className="input input-bordered w-full my-3 cursor-pointer bg-neutral text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
