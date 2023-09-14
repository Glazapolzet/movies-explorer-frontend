export const useSearchFilter = () => {
  const search = (searchQuery, movies) => {
    const searchQueryLower = searchQuery.toLowerCase();

    return movies.filter(({ nameRU, nameEN }) => {
      return nameRU.toLowerCase().includes(searchQueryLower) || nameEN.toLowerCase().includes(searchQueryLower);
    });
  }

  return {search};
}
