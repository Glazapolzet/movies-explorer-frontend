export const useChangeProperty = () => {
  function addProperty(itemToAddProp, propKey, prop) {
    itemToAddProp[`${propKey}`] = prop;

    return itemToAddProp;
  }

  function removeProperty(itemToRemoveProp, propKey) {
    delete itemToRemoveProp[`${propKey}`];

    return itemToRemoveProp;
  }

  return {addProperty, removeProperty}
}
