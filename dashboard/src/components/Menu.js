import React, { useState } from "react";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import ProfileDropdown from "./ProfileDropdown";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const { isDarkMode } = useTheme();
  const { user } = useUser();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <div className="avatar">{user.avatar}</div>
          <p className="username">{user.username}</p>
          <KeyboardArrowDown sx={{ ml: 1, fontSize: 16 }} />
        </div>
      </div>

      <ProfileDropdown
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileClose}
      />
    </div>
  );
};

export default Menu;
