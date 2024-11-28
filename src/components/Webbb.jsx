import React from "react";
import paint from "../assets/images/paint.jpg";
import Rafting from "../assets/images/Rafting.jpg";
import adventure from "../assets/images/adventure.jpg";
const Webbb = () => {
  return (
    <div className="position relative bottom-20">
      <div className="position relative left-96">
        <h1 className="position relative left-24 text-4xl font-bold">
          <span className="text-amber-600">Choose </span>Your Adventure
        </h1>
        <p className="position relative left-20 top-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          <span className="position relative left-20">
            {" "}
            Reiciendis id in temporibus eo{" "}
          </span>
        </p>
      </div>

      <div className="flex justify-center align-center gap-8 position relative bottom-20 ">
        <div className="w-[18rem] h-[25rem] m-4 p-6 bg-white drop-shadow-2xl position relative top-24 ">
          <div className="position relative top-16 left-10">
            <div className="position relative right-10 bottom-10 ">
              <img className="" src={paint} alt="" width={800} />
            </div>
            <h1 className="position relative bottom-4 left-10 font-bold text-2xl">
              Paint Ball
            </h1>
            <p className="position relative  bottom-3 right-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            </p>
            <div className="position relative left-7 m-2 py-2 w-32 text-amber-500 bottom-5">
              <button>Learn more</button>
            </div>
          </div>
        </div>

        <div className="w-[18rem] h-[25rem] m-4 p-6 bg-white drop-shadow-2xl position relative top-24 ">
          <div className="position relative top-16 left-10">
            <div className="position relative right-10 bottom-10">
              <img src={Rafting} alt="" />
            </div>
            <h1 className="position relative bottom-4 left-12 font-bold text-2xl ">
              Rafting
            </h1>
            <p className="position relative  bottom-3 right-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            </p>
            <div className="position relative left-9 m-2 py-2 w-32 text-amber-500 bottom-5">
              <button>Learn more</button>
            </div>
          </div>
        </div>

        <div className="w-[18rem] h-[25rem] m-4 p-6 bg-white drop-shadow-2xl position relative top-24 ">
          <div className="position relative top-16 left-10">
            <div className="position relative right-10 bottom-10">
              <img src={adventure} alt="" />
            </div>
            <h1 className="position relative bottom-4 right-5 font-bold text-2xl">
              outdoor adventure
            </h1>
            <p className="position relative  bottom-3 right-3 ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            </p>
            <div className="position relative left-9 m-2 py-2 w-32 text-amber-500 bottom-5">
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webbb;
