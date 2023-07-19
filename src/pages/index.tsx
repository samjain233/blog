import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";
import RecommendedBlogs from "../components/recommededBlogs/Blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>trendbyte</title>
        <meta name="description" content="sambhav jain website" />
      </Head>
      <Navbar />
      <RecommendedBlogs />
      <h1>home page</h1>
    </>
  );
}
