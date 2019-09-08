import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import uniqBy from "lodash.uniqby";
import { getMovies } from "./api";
import { useInfiniteScroll } from "./useInfiniteScroll";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const page = useInfiniteScroll();
  async function fetchMore() {
    try {
      const {
        data: {
          data: { movies: newMovies }
        }
      } = await getMovies(page);
      const uniqueMovies = [...movies, ...newMovies];
      setMovies(uniqBy(uniqueMovies, "id"));
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchInitial() {
    try {
      const {
        data: {
          data: { movies }
        }
      } = await getMovies(page);
      setMovies(movies);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchInitial();
  }, []);
  useEffect(() => {
    fetchMore();
  }, [page]);
  return (
    <div>
      <h1>Infinite Movies / Page {page}</h1>
      {loading && <h3>Loading...</h3>}
      {movies &&
        movies.map(movie => (
          <h3 key={`${movie.id}${Date.now()}`}>{movie.title}</h3>
        ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
