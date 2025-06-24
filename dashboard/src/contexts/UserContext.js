import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "USER123",
    username: "USERID",
    name: "Mohit Mehra",
    email: "mohit@example.com",
    avatar: "ZU",
    phone: "+91 98765 43210",
    joinDate: "2023-01-15",
    verified: true,
  });

  const [settings, setSettings] = useState({
    chartProvider: "ChartQ", // 'ChartQ' or 'TradingView'
    instantOrderUpdates: true,
    theme: "default", // 'default' or 'dark'
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
  });

  const [sessions, setSessions] = useState([
    {
      id: 1,
      device: "Kite web",
      browser: "Chrome",
      location: "Mumbai, India",
      loginTime: "2024-06-24 10:30:00",
      active: true,
    },
    {
      id: 2,
      device: "Console",
      browser: "Safari",
      location: "Delhi, India",
      loginTime: "2024-06-23 14:20:00",
      active: false,
    },
  ]);

  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
    // Save to localStorage or send to backend
    localStorage.setItem(
      "userSettings",
      JSON.stringify({ ...settings, ...newSettings })
    );
  };

  const updateProfile = (profileData) => {
    setUser((prev) => ({ ...prev, ...profileData }));
  };

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        settings,
        sessions,
        updateSettings,
        updateProfile,
        setUser,
        setSessions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
