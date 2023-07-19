import BlogCard from "./BlogCard";

const RecommendedBlogs = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row">
        <div className="px-[2%] md:px-[7%] flex flex-row flex-wrap justify-evenly w-full">
          <BlogCard title="laptop buying guide"/>
          <BlogCard title="laptop "/>
          <BlogCard title="laptop  guide"/>
          <BlogCard title="laptop buying "/>
          <BlogCard title="laptop buying guide"/>
          <BlogCard title="laptop "/>
          <BlogCard title="laptop  guide"/>
          <BlogCard title="laptop buying "/>
        </div>
      </div>
    </>
  );
};

export default RecommendedBlogs;
