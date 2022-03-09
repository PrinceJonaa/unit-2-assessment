import { Book } from '../models/book.js';

function index(req, res) {
  Book.find({})
    .then(books => {
      res.render('books/index', {
        books
      });
    })
    .catch(err => {
      console.log(err);
    });
}

function newBook(req, res) {
  res.render('books/new');
}

function create(req,res) {
  req.body.read = false;
  Book.create(req.body)
    .then(book => {
      res.redirect('/books');
    }
  )
}

function bookDelete(req, res) {
  Book.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/books');
    })
    .catch(err => {
      console.log(err);
    });
}

export {
  index,
  newBook as new,
  create,
  bookDelete as delete,
}