const express = require("express");

const app = express();

const port = 5000;
app.get("/api/test", (req, res) => {
  const data = { id: "hh", who: "sb" };
  res.json(data);
});

app.listen(port, () => {
  console.log("server start on port:" + port);
});
