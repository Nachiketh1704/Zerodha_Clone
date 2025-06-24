import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center">
        <div className="col-6 p-4">
          <h1 className="display-6 mb-4">{productName}</h1>
          <p className="text-muted fs-5 mb-4">{productDescription}</p>

          <div className="action-links">
            {learnMore && (
              <a href={learnMore} className="text-primary text-decoration-none">
                Learn More{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>
        <div className="col-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
