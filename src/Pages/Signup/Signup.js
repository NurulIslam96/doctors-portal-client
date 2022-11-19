import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Authprovider";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [createdEmail , setCreatedEmail] = useState('')
  const [token] = useToken(createdEmail)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

 useEffect(()=>{
  if(token){
    navigate('/')
  }
 },[token])

  const handleSignUp = (data) => {
    const userInfo = { displayName: data.name };
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        updateUser(userInfo)
        .then(() => {
          saveUserInfo(data.name, data.email);
          toast.success("User Created Succesfully");
        });
        reset();
      })
      .catch((err) => console.log(err));
  };

  const saveUserInfo = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedEmail(email)
      });
  };

  return (
    <div className="h-[800px] md:mx-0 mx-2 flex justify-center items-center">
      <div className="w-full lg:w-[385px] p-8 space-y-3 rounded-xl shadow">
        <h1 className="text-2xl text-center">Sign Up</h1>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
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
            <label className="block">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters or longer",
                },
              })}
              className="w-full px-4 py-3 rounded-md border focus:border-violet-400"
            />
            {errors.password && (
              <p role="alert" className="text-red-500">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            type={"submit"}
            className="block w-full p-3 text-center rounded-md bg-neutral text-lg text-white cursor-pointer"
            value={"Sign Up"}
          />
        </form>
        <div className="text-center">
          <small>
            Already have an account?
            <span className="text-secondary">
              <Link to="/login"> Please Login</Link>
            </span>
          </small>
        </div>
        <div className="divider">OR</div>
        <input
          type={"submit"}
          className="block w-full p-3 text-center rounded-md border hover:bg-slate-200 text-lg cursor-pointer"
          value={"Continue with Google"}
        />
      </div>
    </div>
  );
};

export default Signup;
