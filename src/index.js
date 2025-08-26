const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Project A! Your CI/CD pipeline works! 🚀");
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
