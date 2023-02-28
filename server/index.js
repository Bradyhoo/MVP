const path = require('path');
const express = require('express');
const app = express();
require("dotenv").config();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(process.env.PORT, () => {
  console.log(`Pantry Tracker running on: http://localhost:${process.env.PORT}`);
});