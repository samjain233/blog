import Image from "next/image";
import Navbar from "../components/Navbar";
import RecommendedBlogs from "../components/recommededBlogs/Blogs";
import Footer from "@/components/Footer";
import HomeMain from "../components/HomeScreen/HomeMain";
import HomeCategories from "../components/HomeScreen/HomeCategories";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        
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
