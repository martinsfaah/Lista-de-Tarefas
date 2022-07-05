const express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const app = express();

const accessControl = (_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  };

app.use(accessControl);
app.use(express.json());

const rotaTarefa = require('./routes/rotaTarefa');

const error = require('./middlewares/error');

app.use(error);

app.use(express.json());

app.use('/tarefa', rotaTarefa);

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(8000, () => console.log(`Escutando na porta: ${8000}`));

module.exports = app;
