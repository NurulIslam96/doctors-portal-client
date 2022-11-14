import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/Authprovider";

const ResetPassword = () => {
  const { resetPass } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleResetPassword = (data) => {
    resetPass(data.email)
    .then(()=>{toast.success("Reset Email Sent")})
    .catch(err => console.log(err))
  };

  return (
    <>
      <input type="checkbox" id="reset-password" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="reset-password"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <h3 className="text-lg font-bold">Enter Your Email Address</h3>
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
            <div className="flex justify-center mt-3">
              <input
                type={"submit"}
                className="md:w-1/4 w-full p-3 text-center rounded-md bg-neutral text-lg text-white cursor-pointer"
                value={"Send Reset Link"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
