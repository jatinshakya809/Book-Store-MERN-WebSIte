import React from "react";

const About = () => {
  return (
    <>
      <div className="md:flex justify-center items-center">
        <div className="md:px-24">
          <img width="500px" src="/About.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center md:mt-16 mt-6 ">
          <div>
            <h1 className="md:text-[45px] text-xl">
              About Us <span className="text-pink-500">:)</span>
            </h1>
          </div>
          <div className="mt-8 ">
            <p className="flex md:w-[500px] md:p-0 px-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nulla atque rerum? Vel hic minima vero praesentium adipisci, alias
              saepe dolorum omnis facilis voluptatem temporibus voluptatum.
            </p>
          </div>
          <div className="mt-2 md:mb-16 ">
            <p className="text-[20px]">Developed By:-</p>
            <h1 className="md:text-[70px] md:leading-none text-[40px]  ">
              Ja<span className="text-pink-500">tin </span>
              Sha<span className="text-pink-500 ">kya</span>
            </h1>
            <p className="text-[20px] py-5">
              Email:- jshakya809@
              <span className="text-pink-500 ">gmail.com</span>
            </p>
            <p className="text-[20px] mb-5">
              Contact:- 735456
              <span className="text-pink-500 ">2457</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
