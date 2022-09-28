const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes/routes');
const { handleErrors } = require('./errors/handleErrors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/rateLimit');
const { DB_LINK } = require('./utils/config');

const { PORT = 4000, NODE_ENV, DB_PROD } = process.env;
const app = express();

mongoose
  .connect(NODE_ENV === 'production' ? DB_PROD : DB_LINK)
  .then(() => console.log('Mongo подключен'))
  .catch((err) => console.log(err.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
