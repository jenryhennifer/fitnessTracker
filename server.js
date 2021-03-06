const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//server connection with MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbExercise', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// routes
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

//shows what port is runnign
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
