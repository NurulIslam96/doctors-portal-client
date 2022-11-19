import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_image_hosting_key;

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/specialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          fetch('http://localhost:5000/doctors',{
            method: "POST",
            headers:{
                "content-type":"application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(doctor)
          })
          .then(res => res.json())
          .then(result => {
            toast.success(`${data.name} is succesfully added`);
            navigate('/dashboard/managedoctors')
          })
        }
      });
  };
  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  return (
    <>
      <div className="md:ml-14 mt-14 mb-6 font-bold text-black">
        <h2 className="text-2xl">Add a New Doctor</h2>
      </div>
      <div className="w-full lg:w-[540px] lg:h-[653px] p-8 space-y-3 rounded-xl shadow bg-white md:ml-14 md:mt-5">
        <form
          onSubmit={handleSubmit(handleAddDoctor)}
          className="space-y-6 ng-untouched ng-pristine ng-valid text-black"
        >
          <div className="space-y-1 text-sm">
            <label className="block">Full Name</label>
            <input
              type="text"
              placeholder="name"
              {...register("name", { required: "Name is Required" })}
              className="w-full px-4 py-3 rounded-md border focus:border-violet-400"
            />
            {errors.name && (
              <p role="alert" className="text-red-500">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label className="block">Email</label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: "Email Address is Required" })}
              className="w-full px-4 py-3 rounded-md border focus:border-violet-400"
            />
            {errors.email && (
              <p role="alert" className="text-red-500">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label className="block">Specialty</label>
            <select
              {...register("specialty")}
              className="select border-gray-200 w-full"
            >
              {specialties.map((specialty) => (
                <option key={specialty._id} specialty={specialty}>
                  {specialty.treatment}
                </option>
              ))}
            </select>
            {errors.password && (
              <p role="alert" className="text-red-500">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label className="block">Photo</label>
            <input
              type="file"
              {...register("image", { required: "Photo is Required" })}
              className="w-full px-4 py-20 rounded-md border focus:border-violet-400"
            />
            {errors.photo && (
              <p role="alert" className="text-red-500">
                {errors.photo?.message}
              </p>
            )}
          </div>
          <input
            type={"submit"}
            className="block w-full p-3 text-center rounded-md bg-neutral text-lg text-white cursor-pointer"
            value={"Add"}
          />
        </form>
      </div>
    </>
  );
};

export default AddDoctor;
