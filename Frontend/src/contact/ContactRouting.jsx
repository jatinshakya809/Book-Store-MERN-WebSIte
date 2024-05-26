import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactRouting = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen-[80vh] mt-[80px]">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactRouting;
