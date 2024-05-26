import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("users");
      toast.success("Logout Successfully");
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <>
      <div>
        <button
          onClick={handleLogout}
          className="bg-orange-500 px-2 py-2 rounded-md cursor-pointer text-white"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Logout;
