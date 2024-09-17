import React, { useState, useEffect } from "react";

function Header() {
  const [header, setHeader] = useState([]);

  useEffect(() => {
    fetch("https://luahty.id.vn/apiHeader.php")
      .then((response) => response.json())
      .then((data) => {
        setHeader(data);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container flex-lg-column">
            
            {Array.isArray(header) && header.map((item) => (
                <a className="navbar-brand mx-lg-auto mb-lg-4" href="#home">
                    <span className="h3 fw-bold d-block d-lg-none">{item.title}</span>
                    <img src={`https://s3.tebi.io/luahty/avatar/${item.image}.jpg`} className="d-none d-lg-block rounded-circle" alt={`${item.title}`} />
                </a>
            ))}

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
                <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#work">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#reviews">Reviews</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#blog">Blog</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>


  );
}

export default Header;