export const GET_DATA = "GET_DATA";
export const INIT_APP = "INIT_APP";
export const CHANGE_CART = "CHANGE_CART";
export const SAVE_CART = "SAVE_CART";
export const LOAD_MORE = "LOAD_MORE";

export const getData = data => {
  return {
    type: GET_DATA,
    data
  };
};

export const initApp = data => {
  return {
    type: INIT_APP,
    data
  };
};

export const changeCart = idCart => {
  return {
    type: CHANGE_CART,
    data: idCart
  };
};

export const saveCart = cart => {
  return {
    type: SAVE_CART,
    data: cart
  };
};

export const loadMore = (data, page) => {
  return {
    type: LOAD_MORE,
    data,
    page
  };
};
