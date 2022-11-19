import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Authprovider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myAppointment?email=${user?.email}`;

  const { data: myAppointment = [] } = useQuery({
    queryKey: ["myAppointment", user?.email],
    queryFn: async()=>{
      const res = await fetch(url, {
        headers: {
          authorization : `bearer ${localStorage.getItem("accessToken")}`
        }
      })
      const data = await res.json()
      return data
    }
  })

  return (
    <div className="overflow-x-auto w-full text-black">
      <div className="md:ml-14 mt-14 mb-6 font-bold">
        <h2 className="text-2xl">My Appointments</h2>
      </div>
      <div className="mx-14">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {myAppointment?.map((appointment,index) => (
              <tr key={index} appointment={appointment} >
                <th>{index+1}</th>
                <td>{appointment.patient}</td>
                <td>{appointment.treatment}</td>
                <td>{appointment.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
