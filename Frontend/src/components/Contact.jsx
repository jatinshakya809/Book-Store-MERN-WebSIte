import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bookName, setBookName] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const contactDetails = await axios
        .post("http://localhost:3000/contact/create", {
          name,
          number,
          email,
          bookName,
        })
        .then((res) => {
          if (res.data) {
            toast.success("Thanks for Contact Us!!");
            setName("");
            setEmail("");
            setNumber("");
            setBookName("");
          }
        })
        .catch((err) => {
          if (err.response) {
            toast.error("Errorr: " + err.response.data.message);
          }
        });
    } catch (error) {}
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="flex justify-center">
            <h1 className="text-[30px] pt-5">
              Want to <span className="text-pink-500">Buy!! :)</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-[35px] pt-5">
              Just <span className="text-pink-500">Contact </span>Us..
            </h1>
          </div>
        </div>
        <div className="mt-5 flex md:border-[2px] md:rounded-xl md:shadow-xl py-14 md:w-[50%] align-items-center justify-center ">
          <form onSubmit={submitHandler}>
            <div className="md:flex md:space-x-5">
              <div>
                <h1 className="md:text-2xl text-xl">Name</h1>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="py-1 px-2 border-[2px] bg-white rounded-md outline-none"
                  type="text"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="">
                <h1 className="md:text-2xl text-xl md:mt-0 mt-3">
                  Contact No.
                </h1>
                <input
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  value={number}
                  className="py-1 px-2 border-[2px] bg-white rounded-md outline-none"
                  type="number"
                  placeholder="Enter your Number "
                />
              </div>
            </div>
            <div className="md:flex md:space-x-5 md:mt-5">
              <div className="mt-4">
                <h1 className="md:text-2xl text-xl">Email</h1>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  className="py-1 px-2 border-[2px] bg-white rounded-md outline-none w-full"
                  type="Email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="mt-4">
                <h1 className="md:text-2xl text-xl">Book Name</h1>
                <input
                  onChange={(e) => {
                    setBookName(e.target.value);
                  }}
                  value={bookName}
                  className="py-1 px-2 border-[2px] bg-white rounded-md outline-none"
                  type="text"
                  placeholder="Enter Book Name"
                />
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-pink-500 text-white py-2 px-3 rounded-xl hover:bg-pink-700">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="md:my-16 mb-10">
          <h1 className="md:text-[25px] text-lg">
            Thanks for giving your{" "}
            <span className="text-pink-500">Valuable Time</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
