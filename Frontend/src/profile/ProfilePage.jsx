import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const ProfilePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-h-screen mt-10 flex justify-center items-center">
        <Profile></Profile>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
