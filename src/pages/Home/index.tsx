import React from "react";
import Footer from "../../components/Footer";
import Iklan from "../../components/Iklan";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Product from "./components/Product";

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <Product />

      <Blog />

      <Feature />

      <Pricing />

      <Faq />

      <Iklan />

      <Footer />
    </>
  );
};

export default Home;
