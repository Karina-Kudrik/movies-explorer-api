const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const app = express();

mongoose
  .connect('mongodb://localhost:27017/bitfilmsdb')
  .then(() => console.log('Mongo подключен'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
