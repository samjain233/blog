import Image from "next/image";
import Link from "next/link";

const BlogCard = (props) => {
  return (
    <>
      <div className="m-2 mt-10 w-full sm:w-[300px] hover:w-[320px] transition-all duration-300">
        <Link href={props.url?props.url:""}>
          <div className="p-1 py-4 border-solid border-[1px] border-orange-500 hover:cursor-pointer hover:bg-[#fff6ee] transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="h-full sm:h-[200px]">
              <Image
                src="/desktop.jpg"
                width={400}
                height={350}
                alt="Picture of the author"
                className="object-cover w-full"
              />
            </div>
            <div className="mx-4">
              <h3 className="mt-4 font-semibold text-xl">{props.title}</h3>
              <h4 className="text-sm mt-1 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat natus iusto error voluptate libero sint minima quos
                rerum laborum tenetur aperiam veritatis facere, dicta reiciendis
                quasi consequatur. Ab, itaque eum.
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
