import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../contexts/Authprovider";


const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myAppointment?email=${user?.email}`;

  const { data: myAppointment = [], isLoading } = useQuery({
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
  if(isLoading){
    return <Spinner/>
  }

  return (
    <div className="overflow-x-auto w-full">
      <div className="md:ml-14 mt-14 mb-6 font-bold">
        <h2 className="text-2xl">My Appointments</h2>
      </div>
      <div className="mx-14 text-black">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {myAppointment?.map((appointment,index) => (
              <tr key={index} appointment={appointment} >
                <th>{index+1}</th>
                <td>{appointment.patient}</td>
                <td>{appointment.treatment}</td>
                <td>{appointment.slot}</td>
                <td>{
                  appointment.price && !appointment.paid && <Link to={`/dashboard/payment/${appointment._id}`}><button className="btn btn-sm btn-primary">Pay</button></Link>
                }
                {
                  appointment.price && appointment.paid && <span className="btn btn-sm btn-success">Paid</span>
                }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
