import React, { useState, useEffect } from "react";
import './css/style.css';

function Home() {
  const [home, setHome] = useState([]);

  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetch("https://luahty.id.vn/apiHome.php")
      .then((response) => response.json())
      .then((data) => {
        setHome(data);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  useEffect(() => {
    fetch("https://luahty.id.vn/apiSocial.php")
      .then((response) => response.json())
      .then((data) => {
        setSocial(data);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  return (
    <section id="home" className="full-height px-lg-5">
   `  <div className="container">
        <div className="row">
          {Array.isArray(home) && home.map((item) => (
    
            <div className="col-lg-10">
              <h1 className="display-3 fw-bold" data-aos="fade-up">{item.title}</h1>
              <h1 className="display-5" data-aos="fade-up">{item.about} <span className="text-brand">{item.job}</span></h1>
              <p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">{item.description}</p>
              <div className="lead mb-4" data-aos="fade-up" data-aos-delay="500">
                <a href={`mailto:${item.email}`} className="link-custom me-3">Email: {item.email}</a><br></br>
                <a href={`tel:${item.phone}`} className="link-custom">Call: {item.phone}</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="700">
                <a href="#work" className="btn btn-brand me-3">Explore My Work</a>
              </div>
            </div>
          ))}

        </div>
        <div className="icons-home">
          <div className="social-icons" data-aos="fade-up" data-aos-delay="900">
            
            {Array.isArray(social) && social.map((item) => (
              <a href={`${item.link}`}><i className={`lab ${item.icon}`}></i></a>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
