import React, { useState, useEffect } from "react";

function About() {
  const [education, setEducation] = useState([]);

  const [experiance, setExperiance] = useState([]);

  useEffect(() => {
    fetch("https://luahty.id.vn/apiEducation.php")
      .then((response) => response.json())
      .then((data) => {
        setEducation(data);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  useEffect(() => {
    fetch("https://luahty.id.vn/apiExperiance.php")
      .then((response) => response.json())
      .then((data) => {
        setExperiance(data);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  return (
    <section id="about" className="full-height px-lg-5">
      <div className="container">
        <div className="row pb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <h6 className="text-brand">ABOUT</h6>
            <h1>My Education & Experiance</h1>
          </div>
        </div>

        <div className="row gy-5">
          <div className="col-lg-6">
            <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">
              Education
            </h3>
            <div className="row gy-4">

            {Array.isArray(education) && education.map((item) => (
              <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4>{item.title}</h4>
                  <p className="text-brand mb-2">{item.description}</p>
                  <p className="mb-0">{item.content}</p>
                </div>
              </div>
            ))}

            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">
              Experiance
            </h3>
            <div className="row gy-4">
                
              {Array.isArray(experiance) && experiance.map((item) => (
                <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                  <div className="bg-base p-4 rounded-4 shadow-effect">
                    <h4>{item.title}</h4>
                    <p className="text-brand mb-2">{item.description}</p>
                    <p className="mb-0">{item.content}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
