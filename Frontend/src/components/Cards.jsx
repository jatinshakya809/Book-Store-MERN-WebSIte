import React, { useContext } from "react";
import { Link, redirect } from "react-router-dom";

import { BookContext } from "../context/BookProvider";

const Cards = ({ item }) => {
  const [bookId, setBookId] = useContext(BookContext);

  const handleIdClick = (selectedId) => {
    setBookId({ id: selectedId });
  };

  return (
    <>
      <div className="mt-4 mb-2 px-5 py-2 duration-300">
        <div className="card w-72 md:w-64 bg-base-100 shadow-xl rounded-xl">
          <figure>
            <img
              className="h-[320px] w-[250px] object-fill"
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className=" p-[32px] rounded-b-xl bg-white">
            <h2 className="text-[24px] font-semibold">
              {item.bookname}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹ {item.price}</div>
              <div
                onClick={() => {
                  redirect();
                }}
                className="mt-6 px-2 py-1 rounded-lg border border-black cursor-pointer hover:bg-pink-500 hover:border-none hover:text-white duration-200"
              >
                <Link
                  onClick={(event) => {
                    if (item.category === "Free") {
                      handleIdClick(item._id);
                      event.stopPropagation();
                    }
                  }}
                  to={item.category == "Free" ? "/read" : "/contact"}
                >
                  {item.category == "Free" ? "Read Now" : "Buy Now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
