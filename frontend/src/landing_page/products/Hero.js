import React from "react";

function Hero() {
  return (
    <div className="container text-center p-5 mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 mb-3">Technology</h1>
          <h3 className="text-muted fs-5 mb-4">
            Sleek, modern and intuitive trading platforms
          </h3>
          <p className="text-muted">
            Check out our{" "}
            <a href="#" className="text-primary">
              investment offerings
            </a>
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
