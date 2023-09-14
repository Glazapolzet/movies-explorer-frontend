export const useLocalStorage = () => {
  function setItemToLocalStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  function getItemFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  return {setItemToLocalStorage, getItemFromLocalStorage}
}
