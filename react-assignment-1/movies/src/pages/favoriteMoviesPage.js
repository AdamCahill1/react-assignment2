import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQueries } from "react-query";
import { getFavourites, getMovie } from "../api/movies-api"; // Update the import path
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  const [movieIds, setMovieIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesData = await getFavourites();
        const ids = favoritesData.map((movie) => movie.id);
        setMovieIds(ids);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const favoriteMovieQueries = useQueries(
    movieIds.map((id) => ({
      queryKey: ["favorite movie", { id }],
      queryFn: getMovie,
    }))
  );

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favoriteMovieQueries
    .filter((q) => q.isSuccess)
    .map((q) => {
      const movie = q.data;
      movie.genre_ids = movie.genres.map((g) => g.id);
      return movie;
    });

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => (
        <>
          <RemoveFromFavorites movie={movie} />
          <WriteReview movie={movie} />
        </>
      )}
    />
  );
};

export default FavoriteMoviesPage;
