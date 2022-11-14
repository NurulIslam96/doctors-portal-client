import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Authprovider";

const Signup = () => {
    const {createUser} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
    .then(result =>{
        const user = result.user;
        console.log(user)
        reset()
    })
    .catch(err => console.log(err))
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
            <label className="block text-gray-800">Full Name</label>
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
            <label className="block text-gray-800">Email</label>
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
            <label className="block text-gray-800">Password</label>
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
