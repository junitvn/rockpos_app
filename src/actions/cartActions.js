export const ADD_TO_CART = "ADD_TO_CART";
export const CHANGE_COMBINATION = "CHANGE_COMBINATION";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REFRESH_CART = "REFRESH_CART";
export const CHANGE_ITEM = "CHANGE_ITEM";

export const addToCart = data => {
  return {
    type: ADD_TO_CART,
    data
  };
};

export const changeCombination = (data, lastProduct) => {
  return {
    type: CHANGE_COMBINATION,
    data,
    lastProduct
  };
};

export const refreshCart = () => {
  return {
    type: REFRESH_CART
  };
};

export const removeItemFromCart = data => {
  return {
    type: REMOVE_ITEM,
    data
  };
};

export const changeItemInCart = data => {
  return {
    type: CHANGE_ITEM,
    data
  };
};
