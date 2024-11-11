import React from "react";
import Card from "react-bootstrap/Card";

const MovieCard = (props) => {
  return (
    <div>
      <Card style={{ width: "20rem", height: "100%" }} className="h-100">
        <Card.Img variant="top" src={props.posterURL} style={{ height: "300px",width: "200px", objectFit: "cover", alignSelf: "center"}}/>
        <Card.Body className="d-flex flex-column">
          <h2 className="card-title">{props.title}</h2>
          <div
            style={{
              maxHeight: "150px",  
              overflowY: "auto",   
            }}
          >
          <p className="card-text">{props.description}</p>
          </div>
          <h4>rating: {props.rating}/10</h4>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
