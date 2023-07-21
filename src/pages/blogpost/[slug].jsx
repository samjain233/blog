import { notFound } from "next/navigation";
import { redirect } from 'next/navigation'
import axios from "axios";
import Navbar from "../../components/Navbar";
import BlogContent from "../../components/blogmain/BlogContent";
import Recomendation from "../../components/blogmain/Recomendation";
import Footer from "../../components/Footer";
import config from "../../../config";
import { useState } from "react";

export async function getServerSideProps(req, res) {
  const { slug } = req.query;
  const data = await axios.post(
    `${process.env.SERVER}${config.getblogs}`,
    { slug },
    { headers: { "Content-Type": "application/json" } }
  );
  return {
    props: { data: data.data },
  };
}

const slug = (props) => {
  if(props.data.status === false){
    return (
      <>
        <div>Blog Not Found</div>
      </>
    )
  }
  const data = props.data.data;
  return (
    <>
      <div>
        <Navbar />
        <BlogContent {...data}/>
        <Recomendation />
        <Footer />
      </div>
    </>
  );
};

export default slug;
