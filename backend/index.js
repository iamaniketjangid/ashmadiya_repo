const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Root API route
app.get("/api", (req, res) => {
  res.json({
    message: "Asmadiya Technology - Backend POC",
    server: "Node.js + Express",
    status: "running",
  });
});

// Health check (useful for monitoring / load balancers)
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.NODE_ENV || "development",
    time: new Date().toISOString(),
  });
});

// Info API (frontend can call this)
app.get("/api/info", (req, res) => {
  res.json({
    company: "Asmadiya Technology",
    details:
      "This is a demo backend endpoint for CI/CD POC deployment on AWS EC2",
  });
});

// ----------------------
// Serve React frontend
// ----------------------
const __dirnamePath = path.resolve();

app.use(express.static(path.join(__dirnamePath, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirnamePath, "../frontend/build", "index.html"));
});

// 404 handler for APIs only (avoid breaking React routes)
app.use("/api/*", (req, res) => {
  res.status(404).json({ error: "API route not found" });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});