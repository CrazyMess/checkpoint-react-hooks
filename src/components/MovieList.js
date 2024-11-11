import React from "react";
import MovieCard from "./MovieCard";
import { Row, Col, Container } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    <Container>
    <Row className="g-4">
      {movies.map((movie, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
        <MovieCard key={index} {...movie} />
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default MovieList;
