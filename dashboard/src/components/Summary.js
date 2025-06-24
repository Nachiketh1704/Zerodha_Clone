import React from "react";
import { VerticalGraph } from "./VerticalGraph";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

const Summary = () => {
  const { isDarkMode } = useTheme();
  const { user } = useUser();

  return (
    <>
      <div className="username">
        <h6 className="title">Hi, {user.name.split(" ")[0]}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>43.65</h3>
            <p>Margin available</p>
            <small>
              Opening balance <span className="profit">43.65</span>
            </small>
          </div>
          <hr />
          <div className="second">
            <p>
              Commodity <span>0.01</span>
            </p>
            <p>
              Commodity <span>0.01</span>
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({13})</p>
        </span>

        <VerticalGraph />
      </div>

      <div className="summary">
        <div className="row">
          <div className="col">
            <h5>
              3.74k <span>Total investment</span>
            </h5>
            <p>
              You haven't made any stocks transactions in your DEMAT yet. Go
              ahead with shopping first equity investment.
            </p>
          </div>
          <div className="col">
            <h5>
              1.55k <span>Current value</span>
            </h5>
            <p>
              You haven't made any stocks transactions in your DEMAT yet. Go
              ahead with shopping first equity investment.
            </p>
          </div>
          <div className="col">
            <h5>
              +2.19k <span>P&L</span>
            </h5>
            <p>
              You haven't made any stocks transactions in your DEMAT yet. Go
              ahead with shopping first equity investment.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="#" className="btn btn-blue">
              Start investing
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
