import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useTheme } from "../contexts/ThemeContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);
  const { currentColors } = useTheme();
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    if (!stockPrice || stockPrice <= 0) {
      alert("Please enter a valid price");
      return;
    }

    if (!stockQuantity || stockQuantity <= 0) {
      alert("Please enter a valid quantity");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3002/api/newOrder", {
        name: uid,
        qty: parseInt(stockQuantity),
        price: parseFloat(stockPrice),
        mode: "BUY",
      });

      alert("Order placed successfully!");
      generalContext.closeBuyWindow();
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  const calculateMargin = () => {
    return (stockQuantity * stockPrice * 0.2).toFixed(2); // 20% margin requirement
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="buy-window-header">
        <h3
          style={{
            color: currentColors.text.primary,
            margin: 0,
            padding: "10px 0",
          }}
        >
          Buy {uid}
        </h3>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              disabled={isLoading}
            />
          </fieldset>
          <fieldset>
            <legend>Price (₹)</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0.05"
              placeholder="0.00"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              disabled={isLoading}
            />
          </fieldset>
        </div>

        <div className="order-summary" style={{ padding: "10px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <span style={{ color: currentColors.text.secondary }}>
              Quantity:
            </span>
            <span style={{ color: currentColors.text.primary }}>
              {stockQuantity}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <span style={{ color: currentColors.text.secondary }}>Price:</span>
            <span style={{ color: currentColors.text.primary }}>
              ₹{stockPrice || "0.00"}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <span style={{ color: currentColors.text.secondary }}>
              Total Value:
            </span>
            <span style={{ color: currentColors.text.primary }}>
              ₹{(stockQuantity * stockPrice || 0).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="buttons">
        <span style={{ color: currentColors.text.secondary }}>
          Margin required ₹{calculateMargin()}
        </span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? "#ccc" : currentColors.success,
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            {isLoading ? "Placing..." : "Buy"}
          </button>
          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
            disabled={isLoading}
            style={{
              backgroundColor: currentColors.secondary,
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
