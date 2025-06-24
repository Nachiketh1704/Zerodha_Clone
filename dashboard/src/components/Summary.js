import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

const Summary = () => {
  const { isDarkMode } = useTheme();
  const { user } = useUser();
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((error) => {
        console.error("Error fetching holdings:", error);
      });
  }, []);

  // Calculate totals
  const totalInvestment = allHoldings.reduce(
    (sum, holding) => sum + holding.avg * holding.qty,
    0
  );
  const currentValue = allHoldings.reduce(
    (sum, holding) => sum + holding.price * holding.qty,
    0
  );
  const totalPL = currentValue - totalInvestment;

  // Prepare chart data for VerticalGraph
  const chartData = {
    labels: allHoldings.map((holding) => holding.name),
    datasets: [
      {
        label: "Current Value (₹)",
        data: allHoldings.map((holding) => holding.price * holding.qty),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Investment (₹)",
        data: allHoldings.map((holding) => holding.avg * holding.qty),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}k`;
    }
    return amount.toFixed(2);
  };

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
            <h3>{formatCurrency(currentValue)}</h3>
            <p>Current Value</p>
            <small>
              Total Investment{" "}
              <span className="profit">{formatCurrency(totalInvestment)}</span>
            </small>
          </div>
          <hr />
          <div className="second">
            <p>
              P&L{" "}
              <span className={totalPL >= 0 ? "profit" : "loss"}>
                {totalPL >= 0 ? "+" : ""}
                {formatCurrency(Math.abs(totalPL))}
              </span>
            </p>
            <p>
              Holdings <span>{allHoldings.length}</span>
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <VerticalGraph data={chartData} />
      </div>

      <div className="summary">
        <div className="row">
          <div className="col">
            <h5>
              {formatCurrency(totalInvestment)} <span>Total investment</span>
            </h5>
            <p>
              {allHoldings.length > 0
                ? `Your portfolio includes ${
                    allHoldings.length
                  } different stocks with a total investment of ₹${totalInvestment.toFixed(
                    2
                  )}.`
                : "You haven't made any stocks transactions in your DEMAT yet. Go ahead with your first equity investment."}
            </p>
          </div>
          <div className="col">
            <h5>
              {formatCurrency(currentValue)} <span>Current value</span>
            </h5>
            <p>
              {allHoldings.length > 0
                ? `Current market value of your holdings is ₹${currentValue.toFixed(
                    2
                  )}.`
                : "You haven't made any stocks transactions in your DEMAT yet. Go ahead with your first equity investment."}
            </p>
          </div>
          <div className="col">
            <h5>
              <span className={totalPL >= 0 ? "profit" : "loss"}>
                {totalPL >= 0 ? "+" : ""}
                {formatCurrency(Math.abs(totalPL))}
              </span>{" "}
              <span>P&L</span>
            </h5>
            <p>
              {allHoldings.length > 0
                ? `Your ${totalPL >= 0 ? "profit" : "loss"} is ₹${Math.abs(
                    totalPL
                  ).toFixed(2)} (${((totalPL / totalInvestment) * 100).toFixed(
                    2
                  )}%).`
                : "You haven't made any stocks transactions in your DEMAT yet. Go ahead with your first equity investment."}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="#" className="btn btn-blue">
              {allHoldings.length > 0 ? "View All Holdings" : "Start investing"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
