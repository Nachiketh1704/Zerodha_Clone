import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import {
  AccountCircle,
  Settings,
  Support,
  PersonAdd,
  Tour,
  Keyboard,
  Logout,
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import SettingsModal from "./SettingsModal";

const ProfileDropdown = ({ anchorEl, open, onClose }) => {
  const { isDarkMode } = useTheme();
  const { user } = useUser();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setSettingsOpen(true);
    onClose();
  };

  const menuItems = [
    { icon: <AccountCircle />, text: "My profile", action: () => {} },
    { icon: <Settings />, text: "Console", action: () => {} },
    { icon: <Support />, text: "Support", action: () => {} },
    { icon: <PersonAdd />, text: "Invite friends", action: () => {} },
    { icon: <Tour />, text: "Tour Kite", action: () => {} },
    { icon: <Keyboard />, text: "Keyboard shortcuts", action: () => {} },
  ];

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            bgcolor: isDarkMode ? "#2d2d2d" : "#ffffff",
            color: isDarkMode ? "#ffffff" : "#000000",
            border: `1px solid ${isDarkMode ? "#3a3a3c" : "#dee2e6"}`,
            minWidth: 250,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* User Info Header */}
        <Box
          sx={{
            px: 2,
            py: 1.5,
            borderBottom: `1px solid ${isDarkMode ? "#3a3a3c" : "#dee2e6"}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: isDarkMode ? "#4184f3" : "#e3f2fd",
                color: isDarkMode ? "#ffffff" : "#1976d2",
                width: 40,
                height: 40,
              }}
            >
              {user.avatar}
            </Avatar>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: isDarkMode ? "#ffffff" : "#000000",
                }}
              >
                {user.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: isDarkMode ? "#8e8e93" : "#6c757d" }}
              >
                {user.username}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={item.action}
            sx={{
              color: isDarkMode ? "#ffffff" : "#000000",
              "&:hover": {
                bgcolor: isDarkMode ? "#3a3a3c" : "#f5f5f5",
              },
            }}
          >
            <ListItemIcon sx={{ color: isDarkMode ? "#8e8e93" : "#6c757d" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}

        <Divider sx={{ bgcolor: isDarkMode ? "#3a3a3c" : "#dee2e6" }} />

        <MenuItem
          onClick={handleSettingsClick}
          sx={{
            color: isDarkMode ? "#ffffff" : "#000000",
            "&:hover": {
              bgcolor: isDarkMode ? "#3a3a3c" : "#f5f5f5",
            },
          }}
        >
          <ListItemIcon sx={{ color: isDarkMode ? "#8e8e93" : "#6c757d" }}>
            <Settings />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => {}}
          sx={{
            color: isDarkMode ? "#ff453a" : "#dc3545",
            "&:hover": {
              bgcolor: isDarkMode ? "#3a3a3c" : "#f5f5f5",
            },
          }}
        >
          <ListItemIcon sx={{ color: isDarkMode ? "#ff453a" : "#dc3545" }}>
            <Logout />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>

      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </>
  );
};

export default ProfileDropdown;
