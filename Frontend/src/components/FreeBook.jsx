import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const FreeBook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_RENDER_BACKEND_URL}/book/get`
        );
        const filterBook = res.data.book.filter(
          (book) => book.category === "Free"
        );
        setBook(filterBook);
      } catch (error) {}
    };
    getBook();
  }, []);

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
      <div className="max-w-screen-2xl container md:mx-auto px-4 py-10">
        <div>
          <h1 className="font-bold text-xl flex items-center gap-4 pb-2">
            <div className="w-2 h-2 bg-black rounded-full"></div> Free Offered
            Books
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
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
