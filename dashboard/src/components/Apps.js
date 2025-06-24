import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Apps = () => {
  const { isDarkMode, currentColors } = useTheme();

  const apps = [
    {
      name: "Kite Web",
      description: "Our flagship trading platform with real-time market data",
      status: "Active",
      icon: "🌐",
    },
    {
      name: "Kite Mobile",
      description: "Trade on the go with our mobile app",
      status: "Available",
      icon: "📱",
    },
    {
      name: "Console",
      description: "Back-office and portfolio management",
      status: "Available",
      icon: "⚙️",
    },
    {
      name: "Coin",
      description: "Mutual fund investment platform",
      status: "Available",
      icon: "🪙",
    },
    {
      name: "Pulse",
      description: "Community platform for traders",
      status: "Available",
      icon: "💬",
    },
  ];

  return (
    <>
      <h3 className="title">Apps</h3>

      <div
        className="apps-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {apps.map((app, index) => (
          <div
            key={index}
            className="app-card"
            style={{
              padding: "1.5rem",
              backgroundColor: isDarkMode ? currentColors.surface : "#f8f9fa",
              borderRadius: "8px",
              border: `1px solid ${currentColors.border}`,
              cursor: "pointer",
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: currentColors.primary,
              },
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = currentColors.primary;
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = currentColors.border;
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            <div
              className="app-header"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "2rem", marginRight: "1rem" }}>
                {app.icon}
              </span>
              <div>
                <h4
                  style={{
                    color: currentColors.text.primary,
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  {app.name}
                </h4>
                <span
                  style={{
                    color:
                      app.status === "Active"
                        ? currentColors.success
                        : currentColors.primary,
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  {app.status}
                </span>
              </div>
            </div>

            <p
              style={{
                color: currentColors.text.secondary,
                margin: 0,
                fontSize: "0.9rem",
                lineHeight: "1.5",
              }}
            >
              {app.description}
            </p>

            <div
              className="app-actions"
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <button
                style={{
                  backgroundColor: currentColors.primary,
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                Open
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: currentColors.text.secondary,
                  border: `1px solid ${currentColors.border}`,
                  padding: "8px 16px",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Apps;
