const express = require('express');
const app = express();
const adminRouter = require('./routes/admin');
const homepage = require('./routes/homepage');

app.set('view engine', 'ejs');
app.use('/admin', adminRouter);

homepage(app);

module.exports = app;