import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Funds = () => {
  const { isDarkMode, currentColors } = useTheme();

  const fundsData = {
    equity: {
      available: 43.65,
      used: 0,
      total: 43.65,
    },
    commodity: {
      available: 0.01,
      used: 0,
      total: 0.01,
    },
  };

  return (
    <>
      <h3 className="title">Funds</h3>

      <div
        className="funds-container"
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <div
          className="funds-section"
          style={{
            flex: 1,
            padding: "1.5rem",
            backgroundColor: isDarkMode ? currentColors.surface : "#f8f9fa",
            borderRadius: "8px",
            border: `1px solid ${currentColors.border}`,
          }}
        >
          <h4
            style={{
              color: currentColors.text.primary,
              marginBottom: "1rem",
              fontSize: "1.1rem",
              fontWeight: "500",
            }}
          >
            Equity
          </h4>

          <div className="funds-details">
            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
                padding: "0.5rem 0",
              }}
            >
              <span style={{ color: currentColors.text.secondary }}>
                Available margin
              </span>
              <span
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                ₹{fundsData.equity.available.toFixed(2)}
              </span>
            </div>

            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
                padding: "0.5rem 0",
              }}
            >
              <span style={{ color: currentColors.text.secondary }}>
                Used margin
              </span>
              <span
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                ₹{fundsData.equity.used.toFixed(2)}
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
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                Total
              </span>
              <span
                style={{ color: currentColors.text.primary, fontWeight: "600" }}
              >
                ₹{fundsData.equity.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div
          className="funds-section"
          style={{
            flex: 1,
            padding: "1.5rem",
            backgroundColor: isDarkMode ? currentColors.surface : "#f8f9fa",
            borderRadius: "8px",
            border: `1px solid ${currentColors.border}`,
          }}
        >
          <h4
            style={{
              color: currentColors.text.primary,
              marginBottom: "1rem",
              fontSize: "1.1rem",
              fontWeight: "500",
            }}
          >
            Commodity
          </h4>

          <div className="funds-details">
            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
                padding: "0.5rem 0",
              }}
            >
              <span style={{ color: currentColors.text.secondary }}>
                Available margin
              </span>
              <span
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                ₹{fundsData.commodity.available.toFixed(2)}
              </span>
            </div>

            <div
              className="funds-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
                padding: "0.5rem 0",
              }}
            >
              <span style={{ color: currentColors.text.secondary }}>
                Used margin
              </span>
              <span
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                ₹{fundsData.commodity.used.toFixed(2)}
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
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                Total
              </span>
              <span
                style={{ color: currentColors.text.primary, fontWeight: "600" }}
              >
                ₹{fundsData.commodity.total.toFixed(2)}
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
        }}
      >
        <button
          className="btn btn-blue"
          style={{
            backgroundColor: currentColors.primary,
            border: `1px solid ${currentColors.primary}`,
            padding: "10px 20px",
            borderRadius: "4px",
            textDecoration: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add funds
        </button>
        <button
          className="btn btn-green"
          style={{
            backgroundColor: currentColors.success,
            border: `1px solid ${currentColors.success}`,
            padding: "10px 20px",
            borderRadius: "4px",
            textDecoration: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Withdraw
        </button>
      </div>
    </>
  );
};

export default Funds;
