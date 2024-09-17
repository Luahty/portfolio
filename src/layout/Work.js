import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import WorkDetail from './WorkDetail';

function Work() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    fetch("https://luahty.id.vn/apiWork.php")
      .then((response) => response.json())
      .then((data) => {
        setWork(data);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  return (
    
    <section id="work" className="full-height px-lg-5">
    <div className="container">
      <div className="row pb-4" data-aos="fade-up">
        <div className="col-lg-8">
          <h6 className="text-brand">WORK</h6>
          <h1>My Recent Projects</h1>
        </div>
      </div>



      <Router>
          <Routes>
            <Route path="/" element={
      <div className="row gy-4">

      {Array.isArray(work) && work.map((item) => (
        <div key={item.id} className="col-md-6" data-aos="fade-up">
          <div className="card-custom rounded-4 bg-base shadow-effect">
            <div className="card-custom-image rounded-4">
              <img src={`https://s3.tebi.io/luahty/porject/${item.image}.jpg`} className="rounded-4" alt="" />
            </div>
            <div className="card-custom-content p-4">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <Link to={`/project/${item.id}`} state={{ work: item }} className="link-custom">Read More</Link>
            </div>
          </div>
        </div>
      ))}

      </div>
    } />
            <Route path="/project/:id" element={<WorkDetail />} />
          </Routes>
        </Router>

    </div>
  </section>

  );
}

export default Work;
