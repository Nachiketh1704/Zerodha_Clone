import React from "react";
import Menu from "./Menu";
import { useTheme } from "../contexts/ThemeContext";

const TopBar = () => {
  const { isDarkMode, currentColors } = useTheme();

  // Mock market data - in real app this would come from API
  const marketData = {
    nifty: {
      value: 21223.45,
      change: -89.65,
      changePercent: -0.4,
    },
    sensex: {
      value: 70678.98,
      change: -245.32,
      changePercent: -0.35,
    },
  };

  const formatChange = (change, percent) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)} (${sign}${percent.toFixed(2)}%)`;
  };

  const getChangeColor = (change) => {
    return change >= 0 ? currentColors.success : currentColors.danger;
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">
            {marketData.nifty.value.toLocaleString("en-IN")}
          </p>
          <p
            className="percent"
            style={{ color: getChangeColor(marketData.nifty.change) }}
          >
            {formatChange(
              marketData.nifty.change,
              marketData.nifty.changePercent
            )}
          </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">
            {marketData.sensex.value.toLocaleString("en-IN")}
          </p>
          <p
            className="percent"
            style={{ color: getChangeColor(marketData.sensex.change) }}
          >
            {formatChange(
              marketData.sensex.change,
              marketData.sensex.changePercent
            )}
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
