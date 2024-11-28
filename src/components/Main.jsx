import React from "react";
import outdoor from "../assets/images/outdoor.jpg";
import shield from "../assets/images/shield.png";
import badge from "../assets/images/badge.png";
import team from "../assets/images/team.png";
import infinite from "../assets/images/infinite.png";
import social from "../assets/images/social.png";
import abstract from "../assets/images/abstract.png";
const Main = () => {
  return (
    <div className="flex justify-center align-center ">
      <div className="position relative bottom-10 right-8 ">
        <img className="w-80" src={outdoor} alt="" />
      </div>

      <div className="position relative left-40">
        <h1 className="position relative top-16 right-5 font-bold text-2xl">
          make your Adventure <span className="text-amber-700">Easier</span>
        </h1>
        <p className="position relative top-20 right-5 text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
          Voluptas deserunt consectetur porro anim <br />i eligendi nisi
          deleniti, aperiam voluptatibus facere aspernatur, fugiat sapiente{" "}
          <br /> magni. Vero, in? Cumque deserunt ad numquam quas!
        </p>
        <div className="gap-4 flex justify-center align-center">
          <div className="w-44 h-40 m-4 p-6 bg-white drop-shadow-2xl position relative top-24 right-10 hover:bg-amber-500">
            <div className="position relative top-16 left-10">
              <div className="position relative bottom-16 ">
                <img
                  className="w-10 fill-green-700"
                  src={shield}
                  alt="Shield icon"
                />
              </div>

              <h1 className="position relative bottom-14 right-2 font-extrabold text-5xl text-gray-700 ">
                23
              </h1>
              <h3 className="position relative  bottom-14 right-3  ">
                exprience
              </h3>
            </div>
          </div>

          <div className="w-44 h-40 m-4 p-6 bg-white drop-shadow-2xl position relative top-24 right-10 hover:bg-amber-500">
            <div className="position relative top-16 left-10">
              <div className="position relative bottom-16">
                <img className="w-10" src={badge} alt="" />
              </div>
              <h1 className="position relative bottom-14 right-2 font-extrabold text-5xl text-gray-700">
                54
              </h1>
              <h3 className="position relative  bottom-14 right-1">Reward</h3>
            </div>
          </div>
          <div className="w-44 h-40 m-4 p-6 bg-white drop-shadow-2xl position relative top-24 right-10 hover:bg-amber-500">
            <div className="position relative top-16 left-10">
              <div className="position relative bottom-16  fill-blue-500 ">
                <img className="w-10" src={team} alt="" />
              </div>
              <h1 className="position relative bottom-14 right-1 font-extrabold text-5xl text-gray-700">
                32
              </h1>
              <h3 className="position relative  bottom-14 right-3">
                Expect team
              </h3>
            </div>
          </div>
        </div>
        <div className="position relative top-44 right-[33rem]">
          <h1 className="position relative bottom-4 font-bold text-2xl">
            Our Partners{" "}
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis be{" "}
            <br /> saepe aliquam, corporis at provident{" "}
          </p>
          <h2 className="position relative top-4 font-bold text-lg">
            Learn more
          </h2>
        </div>
        <div className="flex justify-center align-center gap-20 position relative top-24 right-20">
          <div>
            <h1>Logoipsum</h1>
            <div className="position relative right-12 bottom-7">
              <img className="w-10" src={infinite} alt="" />
            </div>
          </div>
          <div>
            {" "}
            Logoipsum
            <div className="position relative right-10 bottom-6">
              <img className="w-8" src={social} alt="" />
            </div>
          </div>
          <div>
            Logoipsum
            <div className="position relative right-14 bottom-10">
              <img className="w-16" src={abstract} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
