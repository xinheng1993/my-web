const express = require("express");

const app = express();

const port = 5000;
var data = [0, 1, 2, 3, 4, 5, 6];
app.get("/api/test", (req, res) => {
  res.json(data);
});
app.listen(port, () => {
  console.log("server start on port:" + port);
});
