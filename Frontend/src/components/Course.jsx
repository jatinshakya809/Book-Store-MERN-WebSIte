import React, { useEffect } from "react";
import Cards from "./Cards";

import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import HindiBooks from "./HindiBooks";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book/get");
        const filterBook = res.data.book.filter(
          (book) => book.category != "Free"
        );
        console.log(res.data.book);
        setBook(filterBook);
      } catch (error) {
        console.log("Error in courses", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="text-center justify-center items-center md:pt-10 pt-7">
          <h1 className="text-3xl font-bold">
            We're delighted to have you{" "}
            <span className="text-pink-500 bg-transparent"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            praesentium aspernatur optio, facere atque ut voluptatum commodi
            nesciunt eum cumque. Nisi eius rem dolore fugit reprehenderit ipsa
            atque a et illo repellat facere voluptatem beatae praesentium,
            recusandae aliquam accusamus error amet, ut eligendi maxime? Beatae
            eveniet distinctio earum facilis delectus in molestiae magni bo
          </p>
          <div className="mt-6">
            <Link
              to={"/"}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
            >
              Back
            </Link>
          </div>
        </div>
        <div className="grid mt-12 grid-cols-1 md:grid-cols-4 cursor-pointer">
          {book.map((item) => (
            <Cards item={item} key={item.id}></Cards>
          ))}
        </div>
        <HindiBooks />
      </div>
    </>
  );
};

export default Course;
