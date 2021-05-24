const express = require("express");
const app = express();
const PORT = 3000;
const serviceOne = require("./controllers/first");
const service = require("./controllers/second");

app.listen(PORT, () => {
  console.log("server up and running");
});

let inputData1 = [];
let inputData2 = [];

app.get("/input1/:value", (req, res) => {
  const data = req.params.value;
  inputData1.push(data);
  res.send("Data Received");
});

app.get("/input2/:value", (req, res) => {
  const data = req.params.value;
  inputData2.push(data);
  serviceOne.first(inputData1, inputData2);
  service.second(inputData1, inputData2);
  res.send("Data Received");
});
