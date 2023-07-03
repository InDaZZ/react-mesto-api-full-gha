const express = require('express');

const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

require('dotenv').config();

const cors = require('cors');

const cookieParser = require('cookie-parser');

const errorsCelebrate = require('celebrate').errors;

const router = require('./routes/index');

const errHandler = require('./middleware/err');

const { requestLogger, errorLogger } = require('./middleware/logger');

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(requestLogger);

app.use(cors({
  origin: [
    'https://mesto.evgeny.dekhtyarev.nomoreparties.sbs',
    'https://api.Mesto.Evgeny.D.nomoreparties.sbs',
    'http://mesto.evgeny.dekhtyarev.nomoreparties.sbs',
    'http://api.Mesto.Evgeny.D.nomoreparties.sbs'],
  credentials: true,
}));

app.use('/', router);

app.use(errorLogger);

app.use(errorsCelebrate());

app.use(errHandler);

mongoose.connect('mongodb://0.0.0.0:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});