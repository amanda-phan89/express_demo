function homepage(app) {
    app.get('/homepage', (req, res) => {
        res.render('homepage');
    })
}

module.exports = homepage;