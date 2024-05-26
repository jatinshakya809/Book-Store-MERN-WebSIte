import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-[80px]">
        <Course />
      </div>
      <Footer />
    </>
  );
};

export default Courses;
