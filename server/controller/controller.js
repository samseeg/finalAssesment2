module.exports = {

    getBooks: (req, res, next) => {
        const db = req.app.get('db');
        // console.log('controller test', req)
        db.find_books()
        .then(response => res.status(200).send(response))
        .catch((err) => res.status(500).send('something went wrong'))
    }
}