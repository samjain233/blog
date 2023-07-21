import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import axios from "axios";
import Navbar from "../../components/Navbar";
import BlogContent from "../../components/blogmain/BlogContent";
import Recomendation from "../../components/blogmain/Recomendation";
import Footer from "../../components/Footer";
import config from "../../../config";
import { useState } from "react";

export async function getServerSideProps(req, res) {
  const { slug } = req.query;
  const { data } = await axios.post(
    `${process.env.SERVER}${config.getblogs}`,
    { slug },
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (data.status === false) {
    return {
      redirect: {
        destination: "/blogpost/not-found",
        permenant: false,
      },
    };
  }
  return {
    props: { data: data },
  };
}

const slug = (props) => {
  const data = props.data.data;
  return (
    <>
      <div>
        <Navbar />
        <BlogContent {...data} />
        <Recomendation />
        <Footer />
      </div>
    </>
  );
};

export default slug;
