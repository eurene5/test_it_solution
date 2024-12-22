import Jumbotron from "@/components/Home/Jumbotron";
import Categories from "@/components/Home/sections/Categories";
import Galeries from "@/components/Home/sections/Galeries";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-[#2a6235]">
        <Header />
        <Jumbotron />
      </div>
      <div className="bg-violet-300">
        <Categories />
      </div>
      <div className="bg-white">
        <Galeries />
      </div>
      <Footer />
    </>
  );
};

export default page;
