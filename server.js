// server.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const userRoutes = require('./routes/user');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/lounedaworld', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(passport.initialize());

app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
