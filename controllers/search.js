class SearchController
{
    index(req, res) {
        res.status(200).render('search', { keyword: req.query.keyword});
    }
}

module.exports = new SearchController;
