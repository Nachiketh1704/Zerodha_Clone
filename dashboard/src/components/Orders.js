import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";

const Orders = () => {
  const { isDarkMode, currentColors } = useTheme();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3002/api/allOrders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (mode) => {
    return mode === "BUY" ? currentColors.success : currentColors.danger;
  };

  if (loading) {
    return (
      <div className="orders">
        <h3 className="title" style={{ color: currentColors.text.primary }}>
          Orders
        </h3>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <p style={{ color: currentColors.text.muted }}>Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title" style={{ color: currentColors.text.primary }}>
        Orders ({orders.length})
      </h3>

      {orders.length === 0 ? (
        <div
          className="no-orders"
          style={{ textAlign: "center", padding: "3rem" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <i
              className="fa fa-clipboard-list"
              style={{
                fontSize: "4rem",
                color: currentColors.text.muted,
                marginBottom: "1rem",
              }}
            ></i>
          </div>
          <p
            style={{
              color: currentColors.text.muted,
              fontSize: "1.1rem",
              marginBottom: "2rem",
            }}
          >
            You haven't placed any orders yet
          </p>
          <p
            style={{
              color: currentColors.text.secondary,
              marginBottom: "2rem",
            }}
          >
            Start trading by placing your first order from the watchlist
          </p>
          <Link
            className="btn"
            to={"/"}
            style={{
              backgroundColor: currentColors.primary,
              color: "#fff",
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: "6px",
              display: "inline-block",
            }}
          >
            Go to Watchlist
          </Link>
        </div>
      ) : (
        <div className="orders-table" style={{ marginTop: "2rem" }}>
          <div
            className="table-header"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
              gap: "1rem",
              padding: "1rem",
              backgroundColor: isDarkMode ? currentColors.surface : "#f8f9fa",
              borderBottom: `1px solid ${currentColors.border}`,
              fontWeight: "600",
            }}
          >
            <span style={{ color: currentColors.text.primary }}>
              Instrument
            </span>
            <span style={{ color: currentColors.text.primary }}>Qty.</span>
            <span style={{ color: currentColors.text.primary }}>Price</span>
            <span style={{ color: currentColors.text.primary }}>Type</span>
            <span style={{ color: currentColors.text.primary }}>Total</span>
            <span style={{ color: currentColors.text.primary }}>Time</span>
          </div>

          {orders.map((order, index) => (
            <div
              key={order._id || index}
              className="table-row"
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
                gap: "1rem",
                padding: "1rem",
                borderBottom: `1px solid ${currentColors.border}`,
                backgroundColor: isDarkMode ? "transparent" : "#fff",
              }}
            >
              <span
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                {order.name}
              </span>
              <span style={{ color: currentColors.text.primary }}>
                {order.qty}
              </span>
              <span style={{ color: currentColors.text.primary }}>
                ₹{order.price?.toFixed(2) || "0.00"}
              </span>
              <span
                style={{
                  color: getStatusColor(order.mode),
                  fontWeight: "500",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  backgroundColor: `${getStatusColor(order.mode)}20`,
                  fontSize: "0.9rem",
                }}
              >
                {order.mode}
              </span>
              <span
                style={{ color: currentColors.text.primary, fontWeight: "500" }}
              >
                ₹{((order.qty || 0) * (order.price || 0)).toFixed(2)}
              </span>
              <span
                style={{
                  color: currentColors.text.secondary,
                  fontSize: "0.9rem",
                }}
              >
                {order.createdAt ? formatDate(order.createdAt) : "N/A"}
              </span>
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: isDarkMode ? currentColors.surface : "#f8f9fa",
          borderRadius: "6px",
          border: `1px solid ${currentColors.border}`,
        }}
      >
        <p
          style={{
            color: currentColors.text.secondary,
            margin: 0,
            fontSize: "0.9rem",
          }}
        >
          <i className="fa fa-info-circle" style={{ marginRight: "8px" }}></i>
          Orders are executed based on market conditions. All times are in IST.
        </p>
      </div>
    </div>
  );
};

export default Orders;
