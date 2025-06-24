import React from "react";

function Universe() {
  const universePartners = [
    {
      logo: "media/images/smallcaseLogo.png",
      description: "Thematic investment platform",
      name: "smallcase",
    },
    {
      logo: "media/images/streakLogo.png",
      description: "Systematic trading platform",
      name: "Streak",
    },
    {
      logo: "media/images/sensibullLogo.svg",
      description: "Options trading platform",
      name: "Sensibull",
    },
    {
      logo: "media/images/zerodhaFundhouse.png",
      description: "Asset management",
      name: "Zerodha Fund House",
    },
    {
      logo: "media/images/goldenpiLogo.png",
      description: "Bonds trading platform",
      name: "Goldenpi",
    },
    {
      logo: "media/images/dittoLogo.png",
      description: "Insurance advisory",
      name: "Ditto Insurance",
    },
  ];

  return (
    <div className="container mt-5 p-5">
      <div className="row text-center">
        <div className="col-12 mb-5">
          <h1 className="display-5 mb-3">The Zerodha Universe</h1>
          <p className="text-muted fs-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        {universePartners.map((partner, index) => (
          <div key={index} className="col-4 p-4 mb-4">
            <div className="partner-card text-center">
              <div
                className="partner-logo mb-3"
                style={{
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxHeight: "50px",
                    maxWidth: "150px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p className="text-muted small">{partner.description}</p>
            </div>
          </div>
        ))}

        <div className="col-12 mt-4">
          <button className="btn btn-primary btn-lg px-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
