import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  
  return (
    <div className="h-[800px] md:mx-0 mx-2 flex justify-center items-center">
      <div className="w-full lg:w-[385px] p-8 space-y-3 rounded-xl shadow">
        <h1 className="text-2xl text-center">Login</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-800">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-md border focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-gray-800">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full px-4 py-3 rounded-md border focus:border-violet-400"
            />
            <Link>
              <p className="mt-2 text-xs">Forgot Password?</p>
            </Link>
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
              <Link> Create new account</Link>
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

export default Login;
