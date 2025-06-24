import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const { isDarkMode, currentColors } = useTheme();

  useEffect(() => {
    axios.get("http://localhost:3002/api/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings?.map((subArray) => subArray["name"]) || [];

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            return (
              <tr key={index}>
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
                <td className={profClass}>{stock.net}</td>
                <td className={stock.isLoss ? "loss" : "profit"}>
                  {stock.day}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Holdings;
