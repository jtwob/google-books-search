const router = require("express").Router();
const {
  newBook,
  getSavedBooks,
  deleteBook,
} = require("../controllers/bookController");

router.post("/", newBook);

router.delete("/:id", deleteBook);

router.get("/", getSavedBooks);

module.exports = router;
