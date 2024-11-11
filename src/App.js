import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";

function App() {
  //states for displaying movies
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  //state for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  //handle adding new movie
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      posterURL,
      rating: Number(rating),
    };
    addMovie(newMovie);

    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  //filtered movies list
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="container mt-5">
      <Filter
        onTitleChange={setTitleFilter}
        onRatingChange={(rating) => setRatingFilter(Number(rating))}
      />

      <hr />
      <MovieList movies={filteredMovies} />
      <hr />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="movietitle">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
           />
        </Form.Group>

        <Form.Group className="mb-3" controlId="moviedesc">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            type="text"
            placeholder="write a description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="moviePUrl">
          <Form.Label>PosterURL</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter poster url" 
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="moviePUrl">
          <Form.Label>Rating</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="rating 1-10" 
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
