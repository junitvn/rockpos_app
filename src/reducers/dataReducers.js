import {
  GET_DATA,
  INIT_APP,
  CHANGE_CART,
  SAVE_CART,
  LOAD_MORE
} from "../actions/databaseActions";
import _ from "lodash";

const initialData = {
  products: [],
  idShop: "",
  idCart: 0,
  page: 1,
  cart: {}
};

export function database(state = initialData, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        products: action.data
      };
    case INIT_APP:
      return {
        ...state,
        products: action.data.products.cache.products,
        total_products: action.data.products.cache.total_products,
        idCart: action.data.cart.id_cart,
        idShop: "1"
      };
    case SAVE_CART:
      return {
        ...state,
        cart: action.data,
        idCart: action.data.id_cart
      };
    case CHANGE_CART:
      return {
        ...state,
        idCart: action.data
      };
    case LOAD_MORE:
      const currentProducts = _.cloneDeep(state.products);
      let data = action.data;
      let newProducts;
      if (!_.isEqual(state.page, action.page)) {
        newProducts = _.concat(currentProducts, data);
        return {
          ...state,
          products: newProducts,
          page: action.page
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
