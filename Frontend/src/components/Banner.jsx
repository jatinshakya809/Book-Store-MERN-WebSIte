import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex  max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row my-10">
        <div className="md:w-[50%] order-2 md:order-1 w-full md:mt-32 mt-10">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold md:leading-normal leading-[50px]">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non
              doloribus perspiciatis nesciunt nemo autem aliquam assumenda odit
            </p>
          </div>
          <Link
            to={"/signup"}
            className="btn mt-6 font-semibold text-lg btn-secondary text-white"
          >
            LogIn
          </Link>
        </div>
        <div className="md:w-[50%] w-full order-1 mt-14">
          <img
            className="w-[600px] pt-20 rounded-xl "
            src="https://cdn.hswstatic.com/gif/books-world.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
