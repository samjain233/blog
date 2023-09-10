import BlogCard from "./BlogCard";

const RecommendedBlogs = (props) => {
  return (
    <>
      <div className="w-full h-full my-[3em]">
        <div className="w-full flex justify-center">
          <h3 className="text-4xl font-bold">{props.heading}</h3>
        </div>
        <div className="px-[2%] md:px-[7%] flex flex-row flex-wrap justify-evenly w-full">
          <BlogCard
            title="Windows Vs Ubuntu"
            url="/blogpost/windows-vs-ubuntu"
          />
          <BlogCard title="laptop " />
          <BlogCard title="laptop  guide" />
          <BlogCard title="laptop buying " />
          <BlogCard title="laptop buying guide" />
          <BlogCard title="laptop " />
          <BlogCard title="laptop  guide" />
          <BlogCard title="laptop buying " />
        </div>
      </div>
    </>
  );
};

export default RecommendedBlogs;
