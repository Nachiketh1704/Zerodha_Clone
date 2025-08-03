import React from "react";

function CreateTicket() {
  const supportCategories = [
    {
      title: "Account Opening",
      icon: "👤",
      links: [
        "Getting started",
        "Online",
        "Charges",
        "Company, Partnership and HUF",
        "Non Resident Indian (NRI)",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "⚙️",
      links: [
        "Your Profile",
        "Account modification",
        "CMR & DP ID",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "📱",
      links: [
        "IPO",
        "Portfolio",
        "Funds statement",
        "Profile",
        "Reports",
        "Referral program",
      ],
    },
    {
      title: "Console",
      icon: "🖥️",
      links: [
        "IPO",
        "Portfolio",
        "Funds statement",
        "Profile",
        "Reports",
        "Referral program",
      ],
    },
    {
      title: "Coin",
      icon: "🪙",
      links: [
        "Understanding mutual funds",
        "Coin app",
        "Coin web",
        "Transactions and reports",
        "National Pension Scheme (NPS)",
      ],
    },
    {
      title: "Funds",
      icon: "💰",
      links: [
        "Fund withdrawal",
        "Adding funds",
        "Adding bank accounts",
        "eMandates",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-12 mb-4">
          <h2>To create a ticket, select a relevant topic</h2>
        </div>

        {supportCategories.map((category, index) => (
          <div key={index} className="col-4 p-4">
            <h4 className="mb-3">
              <span className="me-2">{category.icon}</span>
              {category.title}
            </h4>
            {category.links.map((link, linkIndex) => (
              <div key={linkIndex}>
                <a
                  href="#support-ticket"
                  className="text-decoration-none d-block mb-2"
                  style={{ lineHeight: "1.8", color: "#387ed1" }}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
