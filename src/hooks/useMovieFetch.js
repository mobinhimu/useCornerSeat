import { useEffect, useState } from "react";
import { KEY } from "../App";

function useMovieFetch(search) {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // fetching data from API using useEffect
  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      if (search.length < 3) return;

      try {
        setError("");
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?s=${search}&apikey=${KEY}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Something Went Wrong");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie Not Found");

        setValue(data.Search);

        setError("");
        setLoading(false);
      } catch (error) {
        if (error.message === "AbortError") return;

        setError(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    getMovies();

    return () => {
      controller.abort();
    };
  }, [search]);

  return {
    value,
    loading,
    error,
  };
}

export default useMovieFetch;
