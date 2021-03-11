const Book = require("../models/bookModel");

module.exports = {
  newBook: async (req, res) => {
    try {
      const newBook = new Book({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
      });

      const successSave = await newBook.save();
      res.json(successSave);
    } catch (err) {
      res.send("error saving: ", err);
    }
  },

  getSavedBooks: async (req, res) => {
    try {
      const allBooks = await Book.find({});
      res.json(allBooks);
    } catch (err) {
      res.send("Unable to retrieve saved books", err);
    }
  },
};
