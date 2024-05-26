import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("LoggedIn Successfully");
          document.getElementById("my_modal_3").close();

          setTimeout(() => {
            navigate("/");
            window.location.reload();

            localStorage.setItem("users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        if (err.response) {
          toast.error("Error " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <>
      <div className="bg-white">
        <dialog id="my_modal_3" className="modal">
          <div className="rounded-lg">
            <form
              method="dialog"
              className="bg-white p-8 rounded-xl shadow-lg"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex justify-end">
                <Link
                  onClick={() => {
                    document.getElementById("my_modal_3").close();
                  }}
                  to="/"
                  className="text-[20px] opacity-70 relative left-2 md:hover:bg-slate-300 md:px-2 md:rounded-full"
                >
                  X
                </Link>
              </div>

              <h3 className="font-bold text-lg">Login to your Account</h3>
              <div className="mt-4 space-y-2">
                <span className="block ">Email</span>
                <input
                  type="Email"
                  placeholder="Enter your Email"
                  className="block px-3 bg-white border py-2 rounded-md outline-none w-72 md:w-96"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-[14px] text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2 md:mr-44">
                <span className="block">Password</span>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="px-3 block border bg-white py-2 rounded-md outline-none w-72 md:w-96"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-[14px] text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
                <p>
                  Not registered ?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
