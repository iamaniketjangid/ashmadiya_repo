const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Asmadiya Technology - Backend POC. Server is up." });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Example protected route (for demo only)
app.get("/api/info", (req, res) => {
  res.json({
    company: "Hello Asmadiya Technology",
    details: "This is a demo backend endpoint for CI/CD POC",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
