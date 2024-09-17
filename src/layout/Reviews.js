import React from "react";

class Reviews extends React.Component {
  render() {
    return (
      <section id="reviews" className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <h6 className="text-brand">REVIEWS</h6>
              <h1>What our subscribers say</h1>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="review shadow-effect bg-base p-4 rounded-4">
                <div className="text-brand h5">
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                </div>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  quae facilis fugiat molestias ab illum excepturi, qui optio
                  modi asperiores, delectus maiores!
                </p>
                <div className="person">
                  <h5 className="mb-0">Lưu Anh Tỷ</h5>
                  <p className="mb-0">Facebook</p>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="review shadow-effect bg-base p-4 rounded-4">
                <div className="text-brand h5">
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                </div>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  quae facilis fugiat molestias ab illum excepturi, qui optio
                  modi asperiores, delectus maiores!
                </p>
                <div className="person">
                  <h5 className="mb-0">Lưu Anh Tỷ</h5>
                  <p className="mb-0">Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Reviews;
