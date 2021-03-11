import React from "react";

const ResultCard = (props) => {
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
              <a target="_blank" href={props.link} className="btn btn-primary">
                View
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <img
                className="card-img-top"
                src={props.image}
                alt="Card image cap"
                style={{ width: 150 + "px", float: "left", margin: 10 + "px" }}
              />
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
