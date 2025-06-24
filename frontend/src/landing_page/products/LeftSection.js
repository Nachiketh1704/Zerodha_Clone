import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>
        <div className="col-6 p-4">
          <h1 className="display-6 mb-4">{productName}</h1>
          <p className="text-muted fs-5 mb-4">{productDescription}</p>

          <div className="action-links mb-4">
            {tryDemo && (
              <a
                href={tryDemo}
                className="text-primary me-4 text-decoration-none"
              >
                Try Demo{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="text-primary text-decoration-none">
                Learn More{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>

          {(googlePlay || appStore) && (
            <div className="app-badges">
              {googlePlay && (
                <a href={googlePlay} className="me-3">
                  <img
                    src="media/images/googlePlayBadge.svg"
                    alt="Google Play"
                    style={{ height: "40px" }}
                  />
                </a>
              )}
              {appStore && (
                <a href={appStore}>
                  <img
                    src="media/images/appstoreBadge.svg"
                    alt="App Store"
                    style={{ height: "40px" }}
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
