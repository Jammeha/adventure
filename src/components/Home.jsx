import React from "react";
import Adventures from "../assets/images/Adventures.jpg";
import Facebook from "../icon/Facebook.svg";
import instagram from "../icon/instagram.svg";
import twitter from "../icon/twitter.svg";
import { useState } from "react";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="max-sm:96 max-lg:52 max-md:32">
      <div className="">
        <img
          className="h-[30rem] w-full blur md:blur-none"
          src={Adventures}
          alt=""
        />
      </div>
      <div className="position relative bottom-[30rem]">
        <h1 className="position relative top-10 left-10">Outboune</h1>
        <ul
          className="flex
      justify-center align-center gap-6 position relative left-44 top-5  "
        >
          <li>Home</li>
          <li>About Us</li>
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
              services
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Option 1</li>
                <li className="dropdown-item">Option 2</li>
                <li className="dropdown-item">Option 3</li>
              </ul>
            )}
          </div>

          <li>Pages</li>

          <li>contact US</li>

          <div className="position relative left-20 flex justify-center align-center gap-6">
            <li>
              <img src={Facebook} alt="" />
            </li>
            <li>
              {" "}
              <img src={instagram} alt="" />
            </li>
            <li>
              {" "}
              <img src={twitter} alt="" />
            </li>
          </div>
        </ul>

        <div className="position relative top-52 left-[34rem]">
          <h1 className="text-5xl font-black ">
            <span className=" text-amber-700">About</span> Us
          </h1>
          <h2 className=" position relative top-3 left-5  ">Home About Us</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
