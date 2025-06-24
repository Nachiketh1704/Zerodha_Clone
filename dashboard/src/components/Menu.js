import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Menu = ({ selectedMenu }) => {
  const { isDarkMode, currentColors } = useTheme();

  const menuItems = [
    { name: "Dashboard", link: "/" },
    { name: "Orders", link: "/orders" },
    { name: "Holdings", link: "/holdings" },
    { name: "Positions", link: "/positions" },
    { name: "Funds", link: "/funds" },
    { name: "Apps", link: "/apps" },
  ];

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={item.link}
                className={
                  selectedMenu === item.name ? activeMenuClass : menuClass
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <hr style={{ borderColor: currentColors.border }} />
        <div className="profile" style={{ color: currentColors.text.primary }}>
          <div className="avatar">
            <i className="fa fa-user"></i>
          </div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
