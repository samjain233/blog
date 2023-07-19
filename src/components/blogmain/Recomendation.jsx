import BlogCard from "../recommededBlogs/BlogCard";

const Recomendation = () => {
  return (
    <>
      <div className="w-full h-full my-8">
        <div className="w-full flex justify-center">
        <div className="text-4xl font-bold">Related Articles</div>
        </div>
        <div className="px-[2%] md:px-[7%] flex flex-row flex-wrap justify-evenly w-full">
          <BlogCard title="laptop buying guide" />
          <BlogCard title="laptop " />
          <BlogCard title="laptop  guide" />
          <BlogCard title="laptop buying " />
        </div>
      </div>
    </>
  );
};

export default Recomendation;
