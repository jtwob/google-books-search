import { useState } from "react";
import axios from "axios";
import ResultCard from "../Components/ResultCard/ResultCard";

const Search = (props) => {
  const [search, setsearch] = useState({ term: "" });
  const [results, setresults] = useState({ data: [] });

  const onChange = function (e) {
    setsearch({ term: e.target.value });
  };

  const onSubmitHandler = async function (e) {
    e.preventDefault();
    var query = search.term.trim().replace(/  +/g, "+");
    console.log(query);
    const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    setresults({ data: books.data.items });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <h3>Search a Book</h3>
        </div>
        <div className="row">
          <form className="form-inline" onSubmit={onSubmitHandler}>
            <div className="form-row align-items-center">
              <input
                className="form-control"
                onChange={onChange}
                type="text"
                name="book"
              />
              <button className="btn" type="submit">
                Find
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="container" style={{ backgroundColor: "lightgray" }}>
        <h3>Results</h3>
        {results.data.map((result) => (
          <div className="row" style={{ justifyContent: "center" }}>
            <ResultCard
              title={result.volumeInfo.title}
              authors={result.volumeInfo.authors}
              description={
                result.volumeInfo.description
                  ? result.volumeInfo.description
                  : "No available description at this time."
              }
              image={result.volumeInfo.imageLinks.thumbnail}
              link={result.volumeInfo.infoLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
