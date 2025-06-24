import React, { useState } from "react";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="container-fluid" id="supportHero">
      <div
        className="d-flex justify-content-between align-items-center p-4"
        id="supportWrapper"
      >
        <h4 className="text-white mb-0">Support Portal</h4>
        <a href="#" className="text-white text-decoration-none">
          Track tickets
        </a>
      </div>

      <div className="row p-5">
        <div className="col-6">
          <h1 className="fs-3 text-white mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <div className="position-relative mb-4">
            <input
              className="form-control form-control-lg"
              placeholder="Eg. how do I activate F&O, why is my order getting rejected ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-light position-absolute end-0 top-0 h-100">
              🔍
            </button>
          </div>

          <div className="quick-links">
            <a href="#" className="btn btn-outline-light btn-sm me-2 mb-2">
              Track account opening
            </a>
            <a href="#" className="btn btn-outline-light btn-sm me-2 mb-2">
              Track segment activation
            </a>
            <a href="#" className="btn btn-outline-light btn-sm me-2 mb-2">
              Intraday margins
            </a>
            <br />
            <a href="#" className="btn btn-outline-light btn-sm me-2 mb-2">
              Kite user manual
            </a>
          </div>
        </div>

        <div className="col-6">
          <h3 className="fs-4 text-white mb-4">Featured</h3>
          <ol className="text-white">
            <li className="mb-2">
              <a href="#" className="text-white">
                Surveillance measures on scrips - June 2025
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white">
                Rights Entitlement listing in June 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
