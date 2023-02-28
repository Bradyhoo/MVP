require("dotenv").config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(process.env.PORT, () => {
  console.log(`Pantry Tracker running on: http://localhost:${process.env.PORT}`);
});