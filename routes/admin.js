const express = require('express');
const adminRouter = express.Router();
const searchController = require('../controllers/search');

adminRouter.use((req, res, next) => {
    if (req.query.code) {
        next();
    } else {
        res.send("need to login");
    }
});

adminRouter.use('/hello/:name', (req, res) => {
    const name = req.params.name;
    const age = req.query.age;
    res.send("Hello " + name + " - age: " + age);
});

adminRouter.use('/search', searchController.index);

module.exports = adminRouter
