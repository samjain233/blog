import React from "react";

const navItems = ["Home", "Blogs", "Contact"];

const Navbar = () => {
  return (
    <>
      <div className="bg-orange-400 w-full flex flex-row shadow-md py-8">
        {/* logo of my website  */}
        <div className="flex flex-row w-full">
          <div className="text-white text-2xl mx-[5%] cursor-pointer">TREND<span className="text-3xl text-orange-700">B</span>YTE</div>
          <div className="hidden sm:flex sm:flex-row w-full justify-end items-center">
            {navItems.map((element) => {
              return <div className="text-white mx-10 cursor-pointer text-lg">{element}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
