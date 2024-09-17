import React, { useState } from "react";

function Contact() {
  const [newContact, setNewContact] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://luahty.id.vn/apiContact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
    .then((response) => response.json())
    .then((data) => {
      // Xử lý phản hồi từ server nếu cần
      console.log(data);
      // Hiển thị thông báo thành công
      setSuccessMessage(true);
      // Reset form
      setNewContact({});
      // Ẩn thông báo sau một khoảng thời gian
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    })
    .catch((error) => console.error("Lỗi:", error));
  };

  return (
    <section id="contact" className="full-height px-lg-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 pb-4" data-aos="fade-up">
            <h6 className="text-brand">CONTACT</h6>
            <h1>Interested in working together? Let's talk</h1>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
            <form onSubmit={handleSubmit} action="#" className="row g-lg-3 gy-3">
              <div className="form-group col-md-6">
                <input
                  type="text" name="name" className="form-control" placeholder="Enter your name"
                  value={newContact.name || ''} onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email" name="email" className="form-control" placeholder="Enter your email"
                  value={newContact.email || ''} onChange={handleInputChange} 
                />
              </div>
              <div className="form-group col-12">
                <input
                  type="text" name="subject" className="form-control" placeholder="Enter subject"
                  value={newContact.subject || ''} onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-12">
                <textarea
                  name="message" rows="4" className="form-control" placeholder="Enter your message"
                  value={newContact.message || ''} onChange={handleInputChange} 
                ></textarea>
              </div>
              <div className="form-group col-12 d-grid">
                <button type="submit" className="btn btn-brand">Contact me</button>
              </div>
            </form>
            {successMessage && (
              <div className="alert alert-success mt-3" role="alert">Message sent successfully!</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
