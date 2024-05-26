import React from "react";
import About from "../components/About";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[80px] mb-8 h-screen-[80vh]">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
