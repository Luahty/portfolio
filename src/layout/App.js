import React, { useEffect } from 'react';
import AOS from 'aos';
import './css/aos.css';
import './css/bootstrap.min.css';
import './css/bootstrap.min.css.map';
import './css/line-awesome.min.css'
import './css/style.css';
import Header from "./Header.js";
import Content from "./Content.js";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return null;
};

function App() {
  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar">
      <AOSInit />
      <Header />
      <Content />
    </div>
  );
}

export default App;
