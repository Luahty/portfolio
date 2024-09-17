// WorkDetail.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Hàm escape HTML và thay thế ký tự xuống dòng
function escapeHtml(unsafe) {
  return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/\n/g, "<br />"); // Thay thế xuống dòng
}

const WorkDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Lấy dữ liệu từ state
  const work = location.state?.work;

  if (!work) {
    return <p>Loading...</p>;
  }

  return (
        <div className="row gy-4">
          <div className="col-md-12">
            <div className="card-custom rounded-4 bg-base shadow-effect">
              <div className="card-custom-image rounded-4">
                <img
                  src={`https://s3.tebi.io/luahty/porject/${work.image}.jpg`}
                  className="rounded-4"
                  alt={work.name}
                />
              </div>
              <div>
              <p dangerouslySetInnerHTML={{ __html: escapeHtml(work.content) }}></p>
            <a onClick={() => navigate(-1)} className="link-custom">
              Back to Projects
            </a>
              </div>
            </div>
          </div>
        </div>

  );
};

export default WorkDetail;
