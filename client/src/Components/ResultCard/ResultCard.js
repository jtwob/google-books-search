import React from "react";
import axios from "axios";

const ResultCard = (props) => {
  const saveBook = async function () {
    const bookObj = {
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link,
    };

    const newBook = await axios.post("/api/books", bookObj);
  };

  const onClick = (e) => {
    e.preventDefault();
    saveBook();
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h5 className="card-title">{props.title}</h5>
              {props.authors.map((author) => (
                <p>{author}</p>
              ))}
            </div>
            <div className="col-sm-9" style={{ textAlign: "right" }}>
              <a
                target="_blank"
                style={{ marginRight: 5 + "px" }}
                href={props.link}
                className="btn btn-primary"
              >
                View
              </a>
              <button onClick={onClick} className="btn btn-primary">
                Save
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              {props.image === "No Image Provided." ? (
                <h6>{props.image}</h6>
              ) : (
                <img
                  className="card-img-top"
                  src={props.image}
                  alt="Card image cap"
                  style={{
                    width: 150 + "px",
                    float: "left",
                    margin: 10 + "px",
                  }}
                />
              )}
            </div>
            <div className="col-sm-9">
              <p className="card-text">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
