import {
  ADD_TO_CART,
  CHANGE_COMBINATION,
  REMOVE_ITEM,
  REFRESH_CART,
  CHANGE_ITEM
} from "../actions/cartActions";
import _ from "lodash";

const initialData = {
  products: []
};

export function cart(state = initialData, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const currentProducts = _.cloneDeep(state.products);
      let newProducts = _.cloneDeep(currentProducts);
      let productToBeAdded = action.data;
      const productExisted = _.find(currentProducts, item => {
        return (
          _.isEqual(
            item.product_combination,
            productToBeAdded.product_combination
          ) && _.isEqual(item.id_product, productToBeAdded.id_product)
        );
      });
      if (productExisted) {
        const combinationExisted =
          _.isEqual(
            productExisted.product_combination,
            productToBeAdded.product_combination
          ) &&
          _.isEqual(productExisted.id_product, productToBeAdded.id_product);
        if (combinationExisted) {
          let customizeExist = _.find(newProducts, function(product) {
            return (
              _.isEqual(
                product.customization_fields,
                action.data.customization_fields
              ) &&
              _.isEqual(product.id_product, action.data.id_product) &&
              _.isEqual(
                product.product_combination,
                action.data.product_combination
              )
            );
          });
          if (customizeExist) {
            const index = _.findIndex(newProducts, item => {
              return (
                _.isEqual(
                  item.product_combination,
                  action.data.product_combination
                ) &&
                _.isEqual(item.id_product, action.data.id_product) &&
                _.isEqual(
                  item.customization_fields,
                  action.data.customization_fields
                )
              );
            });
            newProducts[index].qtyInCart += 1;
          } else {
            newProducts.push({ ...action.data, qtyInCart: 1 });
          }
        } else {
          productToBeAdded = { ...productToBeAdded, qtyInCart: 1 };
          newProducts.push(productToBeAdded);
        }
      } else {
        if (productExisted !== "undefined") {
          productToBeAdded = { ...productToBeAdded, qtyInCart: 1 };
          newProducts.push(productToBeAdded);
        } else {
          newProducts.push(productToBeAdded);
        }
      }
      return {
        products: newProducts
      };

    case CHANGE_COMBINATION:
      let cartProducts = _.cloneDeep(state.products);
      //Check if the combination already existed in cart
      let combinationExist = _.find(cartProducts, product => {
        return (
          _.isEqual(
            _.head(product.product_combination).combination_key,
            _.head(action.data.product_combination).combination_key
          ) && _.isEqual(product.id_product, action.data.id_product)
        );
      });

      // find the last product index
      let lastIndex = _.findIndex(cartProducts, product => {
        return (
          _.isEqual(
            _.head(product.product_combination).combination_key,
            _.head(action.lastProduct.product_combination).combination_key
          ) &&
          _.isEqual(product.id_product, action.lastProduct.id_product) &&
          _.isEqual(
            product.customization_fields,
            action.lastProduct.customization_fields
          )
        );
      });

      if (combinationExist) {
        //If the combination existed
        //Check if the customize fields existed
        let customizeFieldsExist = _.find(cartProducts, product => {
          return (
            _.isEqual(product.id_product, action.data.id_product) &&
            _.isEqual(
              _.head(product.product_combination).combination_key,
              _.head(action.data.product_combination).combination_key
            ) &&
            _.isEqual(
              product.customization_fields,
              action.data.customization_fields
            )
          );
        });
        // Same combination , same customize fields
        if (customizeFieldsExist) {
          //If the customize fields existed
          // Add more quantity into the existed product with same combination and same customize fields
          // First find the index of existed product
          let productExistedIndex = _.findIndex(cartProducts, product => {
            return (
              _.isEqual(product.id_product, action.data.id_product) &&
              _.isEqual(
                _.head(product.product_combination).combination_key,
                _.head(action.data.product_combination).combination_key
              ) &&
              _.isEqual(
                product.customization_fields,
                action.data.customization_fields
              )
            );
          });
          //If the last index equal to product existed index
          //it means you change the customize fields of the index
          if (!_.isEqual(lastIndex, productExistedIndex)) {
            cartProducts[productExistedIndex].qtyInCart +=
              action.data.qtyInCart;
            //Remove last product from cart
            cartProducts.splice(lastIndex, 1);
          } else {
            cartProducts[productExistedIndex] = action.data;
          }
        } else {
          // Same combination , different customize fields
          //If the customize fields not exist
          //Replace the last product from cart to the new one
          cartProducts[lastIndex] = action.data;
        }
      } else {
        //If the combination is not exist, add it into cart,and remove the old combination
        //Replace the last product from cart to the new one
        cartProducts[lastIndex] = action.data;
      }
      return {
        products: cartProducts
      };
    case REMOVE_ITEM:
      let productsBeforeDelete = _.cloneDeep(state.products);
      let itemIndex = _.findIndex(productsBeforeDelete, function(product) {
        return (
          _.isEqual(
            product.product_combination,
            action.data.product_combination
          ) && _.isEqual(product.id_product, action.data.id_product)
        );
      });
      productsBeforeDelete.splice(itemIndex, 1);
      return {
        products: productsBeforeDelete
      };
    case REFRESH_CART:
      return {
        products: []
      };
    case CHANGE_ITEM:
      let productsAfterChange = _.cloneDeep(state.products);
      const item = action.data;
      const index = _.findIndex(
        productsAfterChange,
        product =>
          _.isEqual(product.id_product, item.id_product) &&
          _.isEqual(product.product_combination, item.product_combination)
      );
      productsAfterChange[index] = item;
      return {
        products: productsAfterChange
      };
    default:
      return state;
  }
}
