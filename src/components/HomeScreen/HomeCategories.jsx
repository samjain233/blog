import React from "react";

const HomeCategories = () => {
  const categories = [
    "Trending",
    "Gaming",
    "Software",
    "Gadgets",
    "How To Guides",
    "Mobiles",
    "Laptop",
  ];
  return (
    <>
      <div className="px-12 my-12">
        <div className="flex flex-row flex-wrap justify-center w-full">
          {categories.map((element) => {
            return (
              <div key={element} className="px-[6%] py-[3%] m-4 text-4xl bg-white text-orange-500 font-bold rounded-lg cursor-pointer border-2 border-orange-500 shadow-sm hover:bg-orange-500 hover:text-white transition-all duration-300">
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeCategories;
