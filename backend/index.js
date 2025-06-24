require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/api/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/api/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

// Market Data Endpoint (Mock data for dashboard)
app.get("/api/market-data", async (req, res) => {
  try {
    const marketData = {
      nifty: {
        value: 21223.45 + (Math.random() - 0.5) * 100,
        change: -89.65 + (Math.random() - 0.5) * 20,
        changePercent: -0.4 + (Math.random() - 0.5) * 0.5,
      },
      sensex: {
        value: 70678.98 + (Math.random() - 0.5) * 500,
        change: -245.32 + (Math.random() - 0.5) * 50,
        changePercent: -0.35 + (Math.random() - 0.5) * 0.5,
      },
    };
    res.json(marketData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3002");
  mongoose.connect(MONGO_URI);
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
});
