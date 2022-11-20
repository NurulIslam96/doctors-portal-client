import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Authprovider";
import useAdmin from "../../hooks/useAdmin";

const AllUsers = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
    const url = 'http://localhost:5000/users';
    const {data: users = [], refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async ()=>{
            const res = await fetch(url,{
              headers:{
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
            })
            const data = await res.json()
            return data
        }
    })
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: "PUT",
            headers:{
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch()
            }
        })
    }

  return (
    <div className="overflow-x-auto w-full">
      <div className="md:ml-14 mt-14 mb-6 font-bold">
        <h2 className="text-2xl">All Users: {users.length}</h2>
      </div>
      <div className="md:mx-14 text-black">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index} appointment={user}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role === 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td>
                <td>{isAdmin && <button className="btn btn-xs btn-error">Delete</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
