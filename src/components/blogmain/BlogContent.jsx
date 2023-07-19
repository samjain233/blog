import Head from "next/head";
import Image from "next/image";
import React from "react";

const BlogContent = (props) => {
  const createMarkup = (content) => {
    return { __html: content };
  };
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.title} />
      </Head>
      <div className="px-[5%] md:px-[8%] mt-12 flex flex-row">
        <div className="lg:w-[60%]">
          {/* content  */}
          <main>
            <div className="main">
              <div className="head">
                <h1>{props.heading}</h1>
              </div>
              <div className="info_body">
                <div
                  dangerouslySetInnerHTML={createMarkup(props.content)}
                ></div>
              </div>
            </div>
          </main>
          <div className="my-10 w-full h-[5px] bg-orange-600"></div>
        </div>
        <div className="free_space hidden lg:flex">{/* {advertisement} */}</div>
      </div>
    </>
  );
};

export default BlogContent;
