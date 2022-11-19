import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Authprovider";
import useToken from "../../hooks/useToken";
import ResetPassword from "./ResetPassword";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.path || "/";
  useEffect(()=>{
    if(token){
      navigate(from, {replace: true})
    }
   },[token])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginEmail(data.email)
      })
      .catch((err) => console.log(err));
  };

  const handGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        if(user){
          fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => setLoginEmail(user.email));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-[800px] md:mx-0 mx-2 flex justify-center items-center">
      <ResetPassword></ResetPassword>
      <div className="w-full lg:w-[385px] p-8 space-y-3 rounded-xl shadow">
        <h1 className="text-2xl text-center">Login</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
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
            <label
              htmlFor="reset-password"
              className="mt-2 text-xs cursor-pointer hover:text-secondary"
            >
              Forgot Password?
            </label>
          </div>
          <input
            type={"submit"}
            className="block w-full p-3 text-center rounded-md bg-neutral text-lg text-white cursor-pointer"
            value={"Login"}
          />
        </form>
        <div className="text-center">
          <small>
            New to Doctors Portal?
            <span className="text-secondary">
              <Link to="/signup"> Create new account</Link>
            </span>
          </small>
        </div>
        <div className="divider">OR</div>
        <input
          type={"submit"}
          className="block w-full p-3 text-center rounded-md border hover:bg-slate-200 text-lg cursor-pointer"
          value={"Continue with Google"}
          onClick={handGoogleSignIn}
        />
      </div>
    </div>
  );
};

export default Login;
