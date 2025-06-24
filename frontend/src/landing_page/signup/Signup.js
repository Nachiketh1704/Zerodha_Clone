import React, { useState } from "react";

function Signup() {
  const [mobile, setMobile] = useState("");

  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-6">
          <img
            src="media/images/signup.png"
            alt="Signup"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6">
          <h1 className="fs-2 mb-3">
            Open a free demat and trading account online
          </h1>
          <p className="text-muted mb-4">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>

          <div className="signup-form">
            <h3 className="fs-4 mb-3">Signup now</h3>
            <p className="text-muted mb-3">
              Or track your existing application
            </p>

            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text">🇮🇳 +91</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>

            <button className="btn btn-primary w-100 mb-3">Get OTP</button>

            <p className="text-muted" style={{ fontSize: "12px" }}>
              By proceeding, you agree to the Zerodha terms & policy
            </p>
          </div>
        </div>
      </div>

      {/* Investment options section */}
      <div className="row p-5 mt-5">
        <div className="col-12 text-center mb-5">
          <h2>Investment options with Zerodha demat account</h2>
        </div>

        <div className="col-6 mb-4">
          <div className="row">
            <div className="col-2">
              <div className="investment-icon" style={{ color: "#387ed1" }}>
                📊
              </div>
            </div>
            <div className="col-10">
              <h4>Stocks</h4>
              <p className="text-muted">
                Invest in all exchange-listed securities
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 mb-4">
          <div className="row">
            <div className="col-2">
              <div className="investment-icon" style={{ color: "#387ed1" }}>
                📈
              </div>
            </div>
            <div className="col-10">
              <h4>Mutual funds</h4>
              <p className="text-muted">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 mb-4">
          <div className="row">
            <div className="col-2">
              <div className="investment-icon" style={{ color: "#387ed1" }}>
                🎯
              </div>
            </div>
            <div className="col-10">
              <h4>IPO</h4>
              <p className="text-muted">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 mb-4">
          <div className="row">
            <div className="col-2">
              <div className="investment-icon" style={{ color: "#387ed1" }}>
                ⚡
              </div>
            </div>
            <div className="col-10">
              <h4>Futures & options</h4>
              <p className="text-muted">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 text-center mt-4">
          <button className="btn btn-primary">Explore investments</button>
        </div>
      </div>

      {/* Steps section */}
      <div className="row p-5 mt-5">
        <div className="col-12 text-center mb-5">
          <h2>Steps to open a demat account with Zerodha</h2>
        </div>

        <div className="col-4 text-center">
          <div className="step-icon mb-3">
            <img
              src="media/images/signup.png"
              alt="Step 1"
              style={{ width: "100px" }}
            />
          </div>
          <h5>01. Enter the requested details</h5>
        </div>

        <div className="col-4 text-center">
          <div className="step-icon mb-3">
            <img
              src="media/images/signup.png"
              alt="Step 2"
              style={{ width: "100px" }}
            />
          </div>
          <h5>02. Complete e-sign & verification</h5>
        </div>

        <div className="col-4 text-center">
          <div className="step-icon mb-3">
            <img
              src="media/images/signup.png"
              alt="Step 3"
              style={{ width: "100px" }}
            />
          </div>
          <h5>03. Start investing!</h5>
        </div>
      </div>

      {/* Benefits section */}
      <div className="row p-5 mt-5">
        <div className="col-12 mb-5">
          <h2>Benefits of opening a Zerodha demat account</h2>
        </div>

        <div className="col-6 mb-4">
          <h4>Unbeatable pricing</h4>
          <p className="text-muted">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades
          </p>
        </div>

        <div className="col-6 mb-4">
          <h4>Best investing experience</h4>
          <p className="text-muted">
            Simple and intuitive trading platform with an easy-to-understand
            user interface
          </p>
        </div>

        <div className="col-6 mb-4">
          <h4>No spam or gimmicks</h4>
          <p className="text-muted">
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>
        </div>

        <div className="col-6 mb-4">
          <h4>The Zerodha universe</h4>
          <p className="text-muted">
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
      </div>

      {/* Account types section */}
      <div className="row p-5 mt-5">
        <div className="col-12 text-center mb-5">
          <h2>Explore different account types</h2>
        </div>

        <div className="col-4 text-center">
          <div className="account-type-card p-4 border rounded">
            <div className="mb-3">👤</div>
            <h4>Individual Account</h4>
            <p className="text-muted">
              Invest in equity, mutual funds and derivatives
            </p>
          </div>
        </div>

        <div className="col-4 text-center">
          <div className="account-type-card p-4 border rounded">
            <div className="mb-3">👥</div>
            <h4>HUF Account</h4>
            <p className="text-muted">
              Make tax-efficient investments for your family
            </p>
          </div>
        </div>

        <div className="col-4 text-center">
          <div className="account-type-card p-4 border rounded">
            <div className="mb-3">🌍</div>
            <h4>NRI Account</h4>
            <p className="text-muted">
              Invest in equity, mutual funds, derivatives, and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
