import React from "react";
import mountains from "../assets/images/mountains.jpg";
import shield from "../assets/images/shield.png";
import badge from "../assets/images/badge.png";
import team from "../assets/images/team.png";
const Yours = () => {
  return (
    <main className="position relative top-52  ">
      <div>
        <div className="w-full ">
          <img src={mountains} alt="" />
        </div>

        <div className="position relative bottom-[50rem] left-96">
          <div className="position relative top-44">
            <h1 className="position relative left-32 text-3xl font-bold">
              Why <span className="text-amber-700"> Choose </span> Us
            </h1>
            <p className="mt-3 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci{" "}
              <br />
              expedita quisquam quibusdam omnis! Tenetur quas dolorum fugiat qui{" "}
            </p>
          </div>
          <div className="flex justify-center align-center gap-8 ">
            <div class="bg-slate-400 bg-opacity-80 p-6 rounded-lg shadow-lg w-[18rem] h-[15rem] position relative top-64 right-96 ">
              <div className="position relative bottom-10 right-8 ">
                <img
                  className="w-20 position relative left-28 top-10"
                  src={shield}
                  alt=""
                />
              </div>
              <h2 class="text-xl font-bold position relative top-5 left-9 ">
                professional Team
              </h2>
              <p className="position relative  top-7 left-5">
                we bring the people together to <br /> challenge thinking and
                drive <br /> transform in 2020
              </p>
            </div>
            <div class="bg-slate-400 bg-opacity-80 p-6 rounded-lg shadow-lg w-[18rem] h-[15rem] position relative top-64 right-96 ">
              <div className="position relative bottom-10 right-8 ">
                <img
                  className="w-20 position position relative left-28 top-10 "
                  src={badge}
                  alt=""
                />
              </div>{" "}
              <h2 class="text-xl font-bold position relative top-5 left-9 ">
                safety guranteed
              </h2>
              <p className="position relative top-7 left-5">
                we bring the people together to <br /> challenge thinking and
                drive <br /> transform in 2020
              </p>
            </div>
            <div class="bg-slate-400 bg-opacity-80 p-6 rounded-lg shadow-lg w-[18rem] h-[15rem] position relative top-64 right-96 ">
              <div className="position relative bottom-10 right-8 ">
                <img
                  className="w-20 position position relative left-28 top-10  "
                  src={team}
                  alt=""
                />
              </div>
              <h2 class="text-xl font-bold position relative top-5 left-9  ">
                Affordable price
              </h2>
              <p className="position relative top-7 left-5">
                we bring the people together to <br /> challenge thinking and
                drive <br /> transform in 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Yours;
