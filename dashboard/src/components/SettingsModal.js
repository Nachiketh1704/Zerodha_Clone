import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Switch,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
} from "@mui/material";
import { Close, Computer, Smartphone } from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

const SettingsModal = ({ open, onClose }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { settings, updateSettings, sessions } = useUser();
  const [tempSettings, setTempSettings] = useState(settings);

  const handleSettingChange = (key, value) => {
    setTempSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    updateSettings(tempSettings);
    if (tempSettings.theme !== settings.theme) {
      if (
        (tempSettings.theme === "dark" && !isDarkMode) ||
        (tempSettings.theme === "default" && isDarkMode)
      ) {
        toggleTheme();
      }
    }
    onClose();
  };

  const handleCancel = () => {
    setTempSettings(settings);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: isDarkMode ? "#2d2d2d" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#000000",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: isDarkMode ? "#2d2d2d" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#000000",
        }}
      >
        Settings
        <IconButton
          onClick={onClose}
          sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ bgcolor: isDarkMode ? "#2d2d2d" : "#ffffff" }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          {/* Left Column - Settings */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            >
              Chart
            </Typography>
            <RadioGroup
              value={tempSettings.chartProvider}
              onChange={(e) =>
                handleSettingChange("chartProvider", e.target.value)
              }
            >
              <FormControlLabel
                value="ChartQ"
                control={<Radio />}
                label="ChartQ"
                sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
              />
              <FormControlLabel
                value="TradingView"
                control={<Radio />}
                label="TradingView"
                sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
              />
            </RadioGroup>

            <Divider
              sx={{ my: 2, bgcolor: isDarkMode ? "#3a3a3c" : "#dee2e6" }}
            />

            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            >
              Theme
            </Typography>
            <RadioGroup
              value={tempSettings.theme}
              onChange={(e) => handleSettingChange("theme", e.target.value)}
            >
              <FormControlLabel
                value="default"
                control={<Radio />}
                label="Default"
                sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
              />
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label="Dark"
                sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
              />
            </RadioGroup>

            <Divider
              sx={{ my: 2, bgcolor: isDarkMode ? "#3a3a3c" : "#dee2e6" }}
            />

            <FormControlLabel
              control={
                <Switch
                  checked={tempSettings.instantOrderUpdates}
                  onChange={(e) =>
                    handleSettingChange("instantOrderUpdates", e.target.checked)
                  }
                />
              }
              label="Instant order updates"
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            />
          </Box>

          {/* Right Column - Sessions */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
              >
                Sessions
              </Typography>
              <Button variant="text" size="small" sx={{ color: "#4184f3" }}>
                Clear all
              </Button>
            </Box>

            <List dense>
              {sessions.map((session) => (
                <ListItem key={session.id} sx={{ px: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                    {session.device.includes("web") ? (
                      <Computer />
                    ) : (
                      <Smartphone />
                    )}
                  </Box>
                  <ListItemText
                    primary={session.device}
                    secondary={session.browser}
                    primaryTypographyProps={{
                      color: isDarkMode ? "#ffffff" : "#000000",
                    }}
                    secondaryTypographyProps={{
                      color: isDarkMode ? "#8e8e93" : "#6c757d",
                    }}
                  />
                  <ListItemSecondaryAction>
                    {session.active && (
                      <Chip
                        label="Active"
                        size="small"
                        color="success"
                        variant="outlined"
                      />
                    )}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions
        sx={{ bgcolor: isDarkMode ? "#2d2d2d" : "#ffffff", gap: 1 }}
      >
        <Button
          onClick={handleCancel}
          sx={{ color: isDarkMode ? "#8e8e93" : "#6c757d" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{ bgcolor: "#4184f3" }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;
