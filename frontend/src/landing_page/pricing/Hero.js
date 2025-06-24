import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="display-4">Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <div className="pricing-display mb-4">
            <div
              style={{
                fontSize: "6rem",
                fontWeight: "300",
                color: "#ff9800",
                lineHeight: "1",
                fontFamily: "Arial, sans-serif",
              }}
            >
              ₹0
            </div>
          </div>
          <h3 className="fs-4 mb-3">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-4 p-4">
          <div className="pricing-display mb-4">
            <div
              style={{
                fontSize: "6rem",
                fontWeight: "300",
                color: "#ff9800",
                lineHeight: "1",
                fontFamily: "Arial, sans-serif",
              }}
            >
              ₹20
            </div>
          </div>
          <h3 className="fs-4 mb-3">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        <div className="col-4 p-4">
          <div className="pricing-display mb-4">
            <div
              style={{
                fontSize: "6rem",
                fontWeight: "300",
                color: "#ff9800",
                lineHeight: "1",
                fontFamily: "Arial, sans-serif",
              }}
            >
              ₹0
            </div>
          </div>
          <h3 className="fs-4 mb-3">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
