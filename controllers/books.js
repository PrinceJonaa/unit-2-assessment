import { Book } from '../models/book.js';

function index(req, res) {
  Book.find({})
    .then(books => {
      res.render('books', {
        books
      });
    })
    .catch(err => {
      console.log(err);
    });
}

function newBook(req, res) {
  Book.find({})
  .then(books => {
  res.render('books/new');
  })
  .catch(err => {
  console.log(err);
  res.redirect('/books')
  }
  );
}

function create(req, res) {
  req.body.read = false;
  Book.create(req.body)
    .then((book) => {
      res.redirect("/books");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/books");
    });
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