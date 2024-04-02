"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://nomad-movies.nomadcoders.workers.dev/movies"
      );
      const json = await response.json();
      setMovies(json);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
