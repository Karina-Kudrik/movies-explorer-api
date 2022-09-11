const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const router = require('./routes/routes');
const { handleErrors } = require('./errors/handleErrors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 4000 } = process.env;
const app = express();

mongoose
  .connect('mongodb://localhost:27017/bitfilmsdb')
  .then(() => console.log('Mongo подключен'))
  .catch((err) => console.log(err.message));

console.log(process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(cors());

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
