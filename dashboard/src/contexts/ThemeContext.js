import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // Apply theme class to document body
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Light theme colors
      light: {
        background: "#ffffff",
        surface: "#f8f9fa",
        primary: "#0052cc",
        secondary: "#6c757d",
        accent: "#f56500",
        text: {
          primary: "#212529",
          secondary: "#6c757d",
          muted: "#adb5bd",
        },
        border: "#dee2e6",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
      },
      // Dark theme colors
      dark: {
        background: "#1a1a1a",
        surface: "#2d2d2d",
        primary: "#4184f3",
        secondary: "#8e8e93",
        accent: "#ff6b35",
        text: {
          primary: "#ffffff",
          secondary: "#e5e5e7",
          muted: "#8e8e93",
        },
        border: "#3a3a3c",
        success: "#30d158",
        danger: "#ff453a",
        warning: "#ffd60a",
      },
    },
  };

  const currentColors = isDarkMode ? theme.colors.dark : theme.colors.light;

  return (
    <ThemeContext.Provider value={{ ...theme, currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
