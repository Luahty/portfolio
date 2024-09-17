import React from "react";
import Home from "./Home";
import Services from "./Services";
import Work from "./Work";
import About from "./About";
import Reviews from "./Reviews";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer.js";
import './css/style.css';

class Content extends React.Component {
  render() {
    return (
      <div id="content-wrapper">
        <Home />
        <Services />
        <Work />
        <About />
        {/* <Reviews /> */}
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
};

export default Content;
