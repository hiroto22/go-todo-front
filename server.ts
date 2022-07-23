const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.tsx"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// "start": "node server.ts",
