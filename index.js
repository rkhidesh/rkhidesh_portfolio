const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Goodbye cruel World!");
});

app.get("/info", (req, res) => {
  res.send("Site Info");
});

app.get("/contact", (req, res) => {
  res.send("Contact us");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
