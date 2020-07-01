import { toFormData } from "./apiUtils";
import { api } from "../src/configs/constants";
import Axios from "axios";
import _ from "lodash";
import { changeCart, saveCart } from "../src/actions/databaseActions";
import { loadingItem } from "../src/actions/homeActions";

export const addToCartWithoutCustomization = params => {
  const {
    id_product,
    id_product_attribute,
    id_shop,
    id_cart,
    text_fields,
    image_fields,
    dispatch
  } = params;
  data = {
    endpoint: "/cart/product/add",
    id_product,
    id_product_attribute,
    id_cart,
    id_shop,
    text_fields
  };

  let form = toFormData(data, null, "");
  if (!_.isEmpty(image_fields)) {
    for (var k in image_fields) {
      if (image_fields.hasOwnProperty(k)) {
        if (typeof image_fields[k] !== "undefined") {
          if (image_fields[k] !== null) {
            form.append(k, {
              uri: image_fields[k].uri,
              name: image_fields[k].fileName,
              type: "image/jpeg"
            });
          }
        }
      }
    }
  }
  Axios({
    method: "post",
    url: api,
    data: form
  })
    .then(response => {
      dispatch(saveCart(response.data.data.cart));
      dispatch(loadingItem(false));
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {});
};

export const editCart = params => {
  const {
    id_product,
    id_product_attribute,
    id_cart,
    quantity,
    discount_type,
    discount,
    operator,
    customization,
    dispatch
  } = params;
  data = {
    endpoint: "/cart/product/edit",
    id_product,
    id_product_attribute,
    id_cart,
    quantity,
    discount_type,
    discount,
    customization: customization ? JSON.stringify(customization) : "",
    operator
  };
  let form = toFormData(data, null, "");
  Axios({
    method: "post",
    url: api,
    data: form
  })
    .then(response => {
      dispatch(saveCart(response.data.data.cart));
      dispatch(loadingItem(false));
    })
    .catch(error => {
      dispatch(loadingItem(false));
    });
};

export const removeProductFromCart = params => {
  const {
    id_product,
    id_product_attribute,
    id_cart,
    id_customization,
    dispatch
  } = params;
  data = {
    endpoint: "/cart/product/delete",
    id_product,
    id_product_attribute,
    id_cart,
    id_customization
  };
  let form = toFormData(data, null, "");
  Axios({
    method: "post",
    url: api,
    data: form
  })
    .then(response => {
      dispatch(saveCart(response.data.data.cart));
      dispatch(loadingItem(false));
    })
    .catch(error => {
      console.log(error);
    });
};
