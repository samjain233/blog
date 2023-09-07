import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import RecommendedBlogs from "../components/recommededBlogs/Blogs";
import Footer from "@/components/Footer";
import HomeMain from "../components/HomeScreen/HomeMain";
import HomeCategories from "../components/HomeScreen/HomeCategories";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </Head>
      <Navbar />
      <HomeMain />
      <RecommendedBlogs heading="Recently Added" />
      <HomeCategories />
      <RecommendedBlogs heading="Trending Articles" />
      <Footer />
    </>
  );
}
