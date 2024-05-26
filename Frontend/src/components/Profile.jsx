import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const getUser = localStorage.getItem("users");
  const user = JSON.parse(getUser);
  const [fullname, setFullName] = useState(user?.fullname);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //http://localhost:3000/user/updateUser
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_RENDER_BACKEND_URL}/user/updateUser`,
        {
          fullname: fullname,
          email: email,
          password: password,
        }
      );
      if (res) {
        toast.success("Profile Updated Please Login");
        localStorage.removeItem("users");
      }
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log("Error in Profile", error);
    }
  };

  return (
    <div className="md:m-24 mx-2 mt-20 mb-6">
      <div className="md:w-[35vw]   duration-300 rounded-2xl md:hover:shadow-xl md:border-2 border-gray-300">
        <h1 className="text-2xl mx-5 mt-3 mb-1">
          Welcome <span className="text-pink-500">{user?.fullname}</span>,
        </h1>
        <h1 className="text-xl mx-5 md:flex ">
          Have a nice day.
          <p className="text-red-500 mx-5">**Profile Editable**</p>
        </h1>

        <form className="p-5 w-full md:pt-10 pt-5 space-y-5">
          <div>
            <label className="md:text-xl">Name: </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              className="text-black w-full bg-transparent rounded-xl md:ml-3 text-[20px] outline-none border md:px-3 md:py-1.5 px-2 py-1"
            />
          </div>
          <div>
            <label className="md:text-xl">Email: </label>
            <input
              type="text"
              value={email}
              readOnly
              className="text-black w-full bg-transparent rounded-xl md:ml-3 text-[20px] outline-none border md:px-3 md:py-1.5 px-2 py-1"
            />
          </div>
          <div>
            <label className="md:text-xl">Password: </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="text-black w-full bg-transparent rounded-xl md:ml-3 text-[20px] outline-none border md:px-3 md:py-1.5 px-2 py-1"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="py-2 px-3 md:mt-8 my-5  bg-pink-500 border-none text-white text-xl rounded-xl"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
