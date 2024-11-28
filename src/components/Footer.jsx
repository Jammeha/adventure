import React from "react";
import Facebook from "../icon/Facebook.svg";
import instagram from "../icon/instagram.svg";
import twitter from "../icon/twitter.svg";

function Footer() {
  return (
    <div className="bg-amber-500 h-32">
      <div className="flex justify-center align-center  gap-8">
        <h1 className="position relative right-32 top-5 font-bold text-2xl">
          Our <span className="text-white"> Newsletters </span>{" "}
        </h1>
        <br />
        <p className="position relative right-96  top-14">
          Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
          Obcaecati iure quibusdam,
        </p>

        <div className="position relative left-20 top-14">
          <label htmlFor="email"></label>
          <input type="" />
          <button className="  w-32 bg-black text-white">select button</button>
          <h2 className="position relative top-3 text-white left-8">
            WWW.DownloadNewThemes.com
          </h2>
        </div>
      </div>
      <div className="bg-black h-72 position relative top-20">
        <div className="position relative  text-white flex justify-center align-center  ">
          <div className="position relative right-44 top-20">
            <h1 className="position relative bottom-5 text-amber-500 text-2xl font-bold">
              Outbounce
            </h1>
            <p className="position relative ">
              Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
              Laborum quis fugiat sequi et tenet
            </p>
            <div className=" flex justify-center align-center gap-5 position relative top-8 right-28">
              <div className="">
                <img className="rounded-full " src={Facebook} alt="" />
              </div>
              <div>
                <img className="fill-blue-500" src={instagram} alt="" />
              </div>
              <div className="fill-blue-500">
                <img className="" src={twitter} alt="" />
              </div>
            </div>
          </div>
          <div className="position relative right-16 top-20">
            <ul>
              <h1 className="position relative bottom-5 text-amber-500 font-bold text-1xl">
                Navigation
              </h1>
              <li>Home</li>
              <li>Pages</li>
              <li>About Us</li>
              <li>Services</li>
              <li>404</li>
            </ul>
          </div>

          <div className="position relative top-20 left-10">
            <ul>
              <h1 className="position relative bottom-5 text-amber-500 font-bold text-1xl">
                Quick Link
              </h1>
              <li>Contact us</li>
              <li>Faqs</li>
              <li>Blog</li>
              <li>Galary</li>
              <li>pricing</li>
            </ul>
          </div>

          <div className="position relative left-40 top-20">
            <h1 className="position relative bottom-5 text-amber-500 font-bold text-1xl">
              Work Hours
            </h1>
            <h2>@ 7 AM - 5 pm. Mon - sat</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Deserunt dolor amet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
