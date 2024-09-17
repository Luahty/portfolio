import React, { useState, useEffect } from "react";

function Footer() {
  const [footer, setFooter] = useState([]);
  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetch("https://luahty.id.vn/apiFooter.php")
      .then((response) => response.json())
      .then((data) => {
        setFooter(data);
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
    <footer className="py-5 px-lg-5">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-auto">

            {Array.isArray(footer) && footer.map((item) => (
              <p className="mb-0">
                <a href="#" className="fw-bold">{item.title}</a>
              </p>
            ))}

          </div>
          <div className="col-auto">
            <div className="social-icons">

              {Array.isArray(social) && social.map((item) => (
                <a href={`${item.link}`}><i className={`lab ${item.icon}`}></i></a>
              ))}

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
