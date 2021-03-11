const router = require("express").Router();
const { newBook, getSavedBooks } = require("../controllers/bookController");

router.post("/", newBook);

router.get("/", getSavedBooks);

module.exports = router;
