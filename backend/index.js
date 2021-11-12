const conectToMongo = require("./db.js");
const express = require("express");

conectToMongo();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello bhaskar");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
