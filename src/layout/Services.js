import React, { useState, useEffect } from "react";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://luahty.id.vn/apiServices.php")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  return (
    <section id="services" className="full-height px-lg-5">
      <div className="container">
        <div className="row pb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <h6 className="text-brand">SERVICES</h6>
            <h1>Services That I Provide</h1>
          </div>
        </div>

        <div className="row gy-4">

          {Array.isArray(services) && services.map((item) => (
            <div className="col-md-4" data-aos="fade-up">
              <div className="service p-4 bg-base rounded-4 shadow-effect">
                <div className="iconbox rounded-4">
                  <i className={`las ${item.icon}`}></i>
                </div>
                <h5 className="mt-4 mb-2">{item.name}</h5>
                <p>{item.description}</p>
                <a href={`${item.link}`} className="link-custom">Read More</a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

  );
}

export default Services;
