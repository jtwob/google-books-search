import { useEffect, useState } from "react";
import axios from "axios";
import ResultCard from "../Components/ResultCard/ResultCard";
import SavedCard from "../Components/SavedCard/SavedCard";

const Saved = () => {
  const [books, setbooks] = useState({ saved: [] });
  const fetchSaved = async function () {
    const books = await axios.get("/api/books");
    setbooks({ saved: books.data });
  };

  useEffect(() => {
    fetchSaved();
  }, [books]);

  return (
    <div className="container">
      {books.saved ? (
        books.saved.map((book) => (
          <SavedCard
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
            id={book._id}
          />
        ))
      ) : (
        <h1>No books saved yet... Head to the search page to add some.</h1>
      )}
    </div>
  );
};

export default Saved;
