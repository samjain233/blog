import Image from "next/image";
import React from "react";
import style from "../../styles/home.module.css";

const HomeMain = () => {
  return (
    <>
      <div className="px-8" >
      <div className="bg-orange-100 mx-8 my-8 px-8 py-12 rounded-lg flex flex-row shadow-md">
        <div className="">
          <Image
            src="/images/HomePageImages/2.jpg"
            width={1200}
            height={400}
            className="p-2 border-2 border-orange-400 shadow-md"
          />
        </div>
        <div className="flex flex-row justify-center w-full items-center px-[10%]">
          <h3
            className={`${style.font_style} text-6xl font-thin text-orange-600 text-center leading-tight`}
          >
            Riding the Wave of Tomorrow's Tech Trends
          </h3>
        </div>
      </div>
      <div className="my-10 w-full h-[5px] bg-orange-600"></div>
      </div>
    </>
  );
};

export default HomeMain;
