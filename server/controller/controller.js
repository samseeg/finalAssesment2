module.exports = {

    getBooks: (req, res, next) => {
        const db = req.app.get('db');
        // console.log('controller test', req)
        db.find_books()
        .then(response => res.status(200).send(response))
        .catch((err) => res.status(500).send('something went wrong'))
    },

    addBook: (req, res, next) => {
        const db = req.app.get('db');
        // console.log(req.body)
        let {title, author, genre} = req.body;
        db.add_book(title, author, genre)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('couldn\'t add book'))
    },

    updateBook: (req, res, next) => {
        const db = req.app.get('db');
        let {title} = req.body;
        db.update_book(title)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('could not update'))
    },

    deleteBook: (req, res, next) => {
        const db = req.app.get('db');
        let {id} = req.body;
        db.delete_book(id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('could not delete'))
    }
}