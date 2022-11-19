import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ActionModal from "../../components/Modals/ActionModal";

const ManageDoctors = () => {
  const [deleteDr, setDeleteDr] = useState(null)
  const closeModal = () => {
    setDeleteDr(null)
  }
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteDoctor = (id) => {
    fetch(`http://localhost:5000/doctors/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full text-black">
      <div className="md:ml-14 mt-14 mb-6 font-bold">
        <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
      </div>
      <div className="md:mx-14">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <tr key={index} appointment={doctor}>
                <th>{index + 1}</th>
                <td>
                  <img
                    src={doctor.image}
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label onClick={() => setDeleteDr(doctor)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deleteDr && <ActionModal
        title={`Are you sure to Delete Dr. ${deleteDr.name}`}
        message={"After deleting it can't be undone. Press Confirm to delete and Cancel to exit."}
        closeModal={closeModal}
        modalData={deleteDr}
        successAction={handleDeleteDoctor}
        ></ActionModal>
      }
    </div>
  );
};

export default ManageDoctors;
