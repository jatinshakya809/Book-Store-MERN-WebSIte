import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post(`${import.meta.env.VITE_RENDER_BACKEND_URL}/user/signup`, userData)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Errorr:" + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="flex h-screen items-center justify-center mt-16">
          <div className="p-5 rounded-lg border shadow-lg">
            <h3 className="font-bold text-lg">SignUp Account</h3>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <div className="mt-4 space-y-2 ">
                <span className="block">Name</span>
                <input
                  type="text"
                  placeholder="Enter your Fullname"
                  {...register("fullname", { required: true })}
                  className="px-3 block border bg-white py-2 rounded-md outline-none w-72 md:w-96"
                />
                {errors.fullname && (
                  <span className="text-[14px] text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span className="block ">Email</span>
                <input
                  type="Email"
                  placeholder="Enter your Email"
                  {...register("email", { required: true })}
                  className="px-3 block border bg-white py-2 rounded-md outline-none w-72 md:w-96"
                />
                {errors.email && (
                  <span className="text-[14px] text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2 ">
                <span className="block">Password</span>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  {...register("password", { required: true })}
                  className="px-3 block border bg-white py-2 rounded-md outline-none w-72 md:w-96"
                />
                {errors.password && (
                  <span className="text-[14px] text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
              </div>
            </form>
            <div className="flex justify-center mt-5">
              <p className="text-[18px]">
                Already registered ?{" "}
                <span
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </span>
              </p>
            </div>
          </div>
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
