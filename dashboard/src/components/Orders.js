import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Orders = () => {
  const { isDarkMode, currentColors } = useTheme();

  return (
    <div className="orders">
      <div className="no-orders">
        <p style={{ color: currentColors.text.muted }}>
          You haven't placed any orders today
        </p>

        <Link
          className="btn"
          to={"/"}
          style={{
            backgroundColor: currentColors.primary,
            textDecoration: "none",
          }}
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
