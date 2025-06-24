import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";

const Funds = () => {
  const { isDarkMode, currentColors } = useTheme();
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/allHoldings");
      setHoldings(response.data);
    } catch (error) {
      console.error("Error fetching holdings:", error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate dynamic funds data based on holdings
  const calculateFunds = () => {
    const totalInvestment = holdings.reduce(
      (sum, holding) => sum + holding.avg * holding.qty,
      0
    );
    const currentValue = holdings.reduce(
      (sum, holding) => sum + holding.price * holding.qty,
      0
    );
    const usedMargin = totalInvestment * 0.2; // 20% margin requirement
    const availableMargin = Math.max(50000 - usedMargin, 0); // Assuming 50k total available

    return {
      equity: {
        available: availableMargin,
        used: usedMargin,
        total: availableMargin + usedMargin,
      },
      commodity: {
        available: 1000.01,
        used: 0,
        total: 1000.01,
      },
    };
  };

  const fundsData = calculateFunds();

  const handleAddFunds = () => {
    alert(
      "Add Funds functionality - This would integrate with payment gateway"
    );
  };

  const handleWithdraw = () => {
    if (fundsData.equity.available <= 0) {
      alert("Insufficient funds available for withdrawal");
      return;
    }
    alert("Withdraw functionality - This would process withdrawal request");
  };

  if (loading) {
    return (
      <div>
        <h3 className="title" style={{ color: currentColors.text.primary }}>
          Funds
        </h3>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <p style={{ color: currentColors.text.muted }}>
            Loading funds data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title" style={{ color: currentColors.text.primary }}>
        Funds & Margin
      </h3>

      <div
        className="funds-summary"
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "1rem",
            backgroundColor: isDarkMode ? currentColors.surface : "#e8f5e5",
            borderRadius: "8px",
            border: `1px solid ${currentColors.success}20`,
            borderLeft: `4px solid ${currentColors.success}`,
          }}
        >
          <h4
            style={{
              color: currentColors.success,
              margin: "0 0 0.5rem 0",
              fontSize: "0.9rem",
            }}
          >
            Total Available
          </h4>
          <p
            style={{
              color: currentColors.text.primary,
              margin: 0,
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            ₹
            {(
              fundsData.equity.available + fundsData.commodity.available
            ).toLocaleString("en-IN", { maximumFractionDigits: 2 })}
          </p>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "1rem",
            backgroundColor: isDarkMode ? currentColors.surface : "#fff3e0",
            borderRadius: "8px",
            border: `1px solid ${currentColors.warning || "#ff9800"}20`,
            borderLeft: `4px solid ${currentColors.warning || "#ff9800"}`,
          }}
        >
          <h4
            style={{
              color: currentColors.warning || "#ff9800",
              margin: "0 0 0.5rem 0",
              fontSize: "0.9rem",
            }}
          >
            Used Margin
          </h4>
          <p
            style={{
              color: currentColors.text.primary,
              margin: 0,
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            ₹
            {fundsData.equity.used.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "1rem",
            backgroundColor: isDarkMode ? currentColors.surface : "#f3e5f5",
            borderRadius: "8px",
            border: `1px solid ${currentColors.primary}20`,
            borderLeft: `4px solid ${currentColors.primary}`,
          }}
        >
          <h4
            style={{
              color: currentColors.primary,
              margin: "0 0 0.5rem 0",
              fontSize: "0.9rem",
            }}
          >
            Total Holdings Value
          </h4>
          <p
            style={{
              color: currentColors.text.primary,
              margin: 0,
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            ₹
            {holdings
              .reduce((sum, holding) => sum + holding.price * holding.qty, 0)
              .toLocaleString("en-IN", { maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div
        className="funds-container"
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div
          className="funds-section"
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "1.5rem",
            backgroundColor: isDarkMode ? currentColors.surface : "#f8f9fa",
            borderRadius: "8px",
            border: `1px solid ${currentColors.border}`,
            boxShadow: isDarkMode ? "none" : "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h4
            style={{
              color: currentColors.text.primary,
              marginBottom: "1rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
            }}
          >
            <i
              className="fa fa-chart-line"
              style={{ marginRight: "8px", color: currentColors.success }}
            ></i>
            Equity
          </h4>

          <div className="funds-details">
            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.8rem",
                padding: "0.5rem 0",
              }}
            >
              <span style={{ color: currentColors.text.secondary }}>
                Available margin
              </span>
              <span
                style={{
                  color: currentColors.success,
                  fontWeight: "600",
                  fontSize: "1.1rem",
                }}
              >
                ₹
                {fundsData.equity.available.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.8rem",
                padding: "0.5rem 0",
              }}
            >
              <span style={{ color: currentColors.text.secondary }}>
                Used margin
              </span>
              <span
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                ₹
                {fundsData.equity.used.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: currentColors.border,
                margin: "1rem 0",
              }}
            />

            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.5rem 0",
              }}
            >
              <span
                style={{ color: currentColors.text.primary, fontWeight: "600" }}
              >
                Total margin
              </span>
              <span
                style={{
                  color: currentColors.primary,
                  fontWeight: "700",
                  fontSize: "1.2rem",
                }}
              >
                ₹
                {fundsData.equity.total.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </div>

        <div
          className="funds-section"
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "1.5rem",
            backgroundColor: isDarkMode ? currentColors.surface : "#f8f9fa",
            borderRadius: "8px",
            border: `1px solid ${currentColors.border}`,
            boxShadow: isDarkMode ? "none" : "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h4
            style={{
              color: currentColors.text.primary,
              marginBottom: "1rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
            }}
          >
            <i
              className="fa fa-coins"
              style={{
                marginRight: "8px",
                color: currentColors.warning || "#ff9800",
              }}
            ></i>
            Commodity
          </h4>

          <div className="funds-details">
            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.8rem",
                padding: "0.5rem 0",
              }}
            >
              <span style={{ color: currentColors.text.secondary }}>
                Available margin
              </span>
              <span
                style={{
                  color: currentColors.success,
                  fontWeight: "600",
                  fontSize: "1.1rem",
                }}
              >
                ₹
                {fundsData.commodity.available.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.8rem",
                padding: "0.5rem 0",
              }}
            >
              <span style={{ color: currentColors.text.secondary }}>
                Used margin
              </span>
              <span
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                ₹
                {fundsData.commodity.used.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: currentColors.border,
                margin: "1rem 0",
              }}
            />

            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.5rem 0",
              }}
            >
              <span
                style={{ color: currentColors.text.primary, fontWeight: "600" }}
              >
                Total margin
              </span>
              <span
                style={{
                  color: currentColors.primary,
                  fontWeight: "700",
                  fontSize: "1.2rem",
                }}
              >
                ₹
                {fundsData.commodity.total.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="funds-actions"
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <button
          className="btn btn-blue"
          onClick={handleAddFunds}
          style={{
            backgroundColor: currentColors.primary,
            border: `1px solid ${currentColors.primary}`,
            padding: "12px 24px",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <i className="fa fa-plus"></i>
          Add funds
        </button>
        <button
          className="btn btn-green"
          onClick={handleWithdraw}
          disabled={fundsData.equity.available <= 0}
          style={{
            backgroundColor:
              fundsData.equity.available > 0 ? currentColors.success : "#ccc",
            border: `1px solid ${
              fundsData.equity.available > 0 ? currentColors.success : "#ccc"
            }`,
            padding: "12px 24px",
            borderRadius: "6px",
            color: "#fff",
            cursor: fundsData.equity.available > 0 ? "pointer" : "not-allowed",
            fontWeight: "500",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <i className="fa fa-arrow-down"></i>
          Withdraw
        </button>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: isDarkMode ? currentColors.surface : "#e3f2fd",
          borderRadius: "6px",
          border: `1px solid ${currentColors.primary}30`,
        }}
      >
        <p
          style={{
            color: currentColors.text.secondary,
            margin: 0,
            fontSize: "0.9rem",
          }}
        >
          <i
            className="fa fa-info-circle"
            style={{ marginRight: "8px", color: currentColors.primary }}
          ></i>
          Margin calculations are based on your current holdings. Used margin
          represents 20% of your total investment value.
        </p>
      </div>
    </>
  );
};

export default Funds;
