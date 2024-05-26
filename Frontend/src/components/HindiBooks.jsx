import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

const HindiBooks = () => {
  const [hindiBook, setHindiBook] = useState([]);
  useEffect(() => {
    const getHindiBook = async (req, res) => {
      try {
        const books = await axios.get("http://localhost:3000/book/hindi");
        setHindiBook(books.data.Hindibook);
      } catch (error) {
        console.log("Error in get hindi book ", error);
      }
    };
    getHindiBook();
  }, []);
  console.log(hindiBook);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="container max-w-screen-2xl my-10 md:mx-auto px-4">
        <div className="">
          <h1 className="font-bold flex items-center gap-4 mb-2 text-xl">
            {" "}
            <div className="w-2 h-2 rounded-full bg-black"></div>Some Exciting
            Hindi books
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            eligendi repellendus quo architecto enim alias exercitationem optio
            pariatur atque dolor. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nemo, quos.
          </p>
        </div>
        <div className="md:ml-20 cursor-pointer">
          <Slider {...settings}>
            {hindiBook.map((item) => (
              <Cards className="" item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HindiBooks;
