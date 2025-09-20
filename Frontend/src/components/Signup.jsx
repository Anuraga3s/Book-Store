import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log("Signup Response:", res.data);

      if (res.data) {
        toast.success("Signup Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
        console.error("Server responded with error:", err.response);
      } else if (err.request) {
        toast.error("No response from server. Is backend running?");
        console.error("No response received:", err.request);
      } else {
        toast.error("Error: " + err.message);
        console.error("Error setting up request:", err.message);
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>

          <h3 className="font-bold text-lg">Signup</h3>

          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Buttons */}
          <div className="flex justify-around mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Signup
            </button>
            <div className="text-xl">
              Have account?{" "}
              <button
                type="button"
                className="underline text-blue-500 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </div>
          </div>
        </form>

        {/* ✅ Move Login outside the form to avoid nested form warning */}
        <Login />
      </div>
    </div>
  );
}

export default Signup;
