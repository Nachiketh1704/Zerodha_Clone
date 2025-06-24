import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const { isDarkMode, currentColors } = useTheme();

  useEffect(() => {
    axios.get("http://localhost:3002/api/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td style={{ color: currentColors.text.primary }}>
                  <p
                    style={{
                      backgroundColor: currentColors.danger,
                      color: "#fff",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      display: "inline-block",
                      fontSize: "0.7rem",
                    }}
                  >
                    {stock.product}
                  </p>
                </td>
                <td style={{ color: currentColors.text.primary }}>
                  {stock.name}
                </td>
                <td style={{ color: currentColors.text.primary }}>
                  {stock.qty}
                </td>
                <td style={{ color: currentColors.text.primary }}>
                  ₹{stock.avg.toFixed(2)}
                </td>
                <td style={{ color: currentColors.text.primary }}>
                  ₹{stock.price.toFixed(2)}
                </td>
                <td className={profClass}>
                  {isProfit ? "+" : ""}₹
                  {Math.abs(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
