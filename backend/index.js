
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./Router/routes.js');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


