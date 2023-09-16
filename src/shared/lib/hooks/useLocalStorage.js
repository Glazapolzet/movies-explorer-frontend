export const useLocalStorage = () => {
  function setItemToLocalStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  function getItemFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function tryValueFromLocalStorage(key, defaultValue) {
    const itemFromLocalStorage = getItemFromLocalStorage(key);

    return itemFromLocalStorage === null ? defaultValue : itemFromLocalStorage;
  }

  return {setItemToLocalStorage, getItemFromLocalStorage, tryValueFromLocalStorage}
}
