import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import RecommendedBlogs from "../components/recommededBlogs/Blogs";

export default function Home() {
  return (
    <>
      <Head>
        <title>trendbyte</title>
        <meta name="description" content="sambhav jain website" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7721198432777120"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Navbar />
      <RecommendedBlogs />
      <h1>home page</h1>
    </>
  );
}
