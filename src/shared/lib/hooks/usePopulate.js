export const EXTERNAL_API = 'https://api.nomoreparties.co/';

export const usePopulate = () => {
  const makeIdenticalToMainApi = (rawMovies) => {
    return rawMovies.map(({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN,
    }) => (
      {
        country,
        director,
        duration,
        year,
        description,
        image: EXTERNAL_API.concat(image.url),
        thumbnail: EXTERNAL_API.concat(image.url),
        trailerLink,
        movieId: id,
        nameRU,
        nameEN,
      }
    ));
  }

  const populate = (rawMovies, savedMovies) => {
    const movies = makeIdenticalToMainApi(rawMovies);

    for (let movie of movies) {
      for (let savedMovie of savedMovies) {
        if (movie.movieId !== savedMovie.movieId) {
          continue;
        }

        movie.owner = savedMovie.owner;
      }
    }

    return movies;
  }

  return {populate};
}
