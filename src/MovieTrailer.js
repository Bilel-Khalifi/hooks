import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieTrailer = ({data}) => {
  const { id } = useParams();
const targetMovie = data.find(e=> e.id == id);
  return (
    <div className="Trailer">
      <Card className="text-center">
        <Card.Header>Watch The Trailer For: {targetMovie.title}</Card.Header>
        <Card.Body>
          <Card.Title>{targetMovie.title}</Card.Title>
          <Card.Text>
            {targetMovie.trailer}
            <hr />
              
            <h5>Synopsis:</h5>
            <p>{targetMovie.description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Rating on IMDB: {targetMovie.rating}/10
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MovieTrailer;