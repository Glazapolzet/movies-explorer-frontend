export const useDurationFilter = () => {
  const addFilter = (movies) => {
    return movies.filter((movie) => movie.duration <= 40);
  }

  return {addFilter};
}
