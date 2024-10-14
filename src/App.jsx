import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Herosection";
import About from "./Components/About"
import Features from "./Components/Features";
import ProductList from "./Components/Productlist";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features/>
      <About/>
      <ProductList/>
      <Testimonials/>
      <Footer/>
    
    </div>
  );
};

export default App;
