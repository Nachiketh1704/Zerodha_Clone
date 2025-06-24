import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-6 p-4">
          <div className="brokerage-section">
            <h3 className="fs-5 mb-4">
              <a href="#" className="text-decoration-none text-primary">
                Brokerage calculator
              </a>
            </h3>
            <ul
              className="text-start text-muted"
              style={{ fontSize: "14px", lineHeight: "1.8" }}
            >
              <li className="mb-2">
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>
              <li className="mb-2">
                Digital contract notes will be sent via e-mail.
              </li>
              <li className="mb-2">
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li className="mb-2">
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li className="mb-2">
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li className="mb-2">
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-6 p-4">
          <div className="charges-section">
            <h3 className="fs-5 mb-4">
              <a href="#" className="text-decoration-none text-primary">
                List of charges
              </a>
            </h3>
            <div
              className="charges-details text-muted"
              style={{ fontSize: "14px" }}
            >
              <p>
                Comprehensive list of all charges and fees applicable to your
                account.
              </p>
              <p>
                Download the complete charges document for detailed information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional pricing information */}
      <div className="row p-5 mt-3">
        <div className="col-12">
          <div
            className="pricing-disclaimer text-muted text-center"
            style={{ fontSize: "12px" }}
          >
            <p>
              * For Delivery based trades, a minimum of ₹13 or 0.1% of the trade
              value will be charged as transaction charges (whichever is
              higher).
            </p>
            <p>
              ** All statutory and regulatory charges such as STT, Transaction
              charges, GST, SEBI charges, etc. as applicable will be charged
              extra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
