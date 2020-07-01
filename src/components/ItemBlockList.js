import React, { PureComponent } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid
} from "react-native";
import { sprintf } from "printj";
import _ from "lodash";
import styles from "../themes/default/styles";
import { openPopup, loadingItem } from "../actions/homeActions";
import axios from "axios";
import { api, lang } from "../configs/constants";
import { toFormData, displayPrice } from "../../utils/apiUtils";
import { configuration } from "../configs/constants";
import { limitText } from "../../utils/apiUtils";

import { addToCartWithoutCustomization } from "../../utils/cartUltils";

export default class ItemBlockList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDialogVisible: false,
      item: this.props.item
    };
  }

  onItemClick = item => {
    const { dispatch, idCart, idShop } = this.props;
    dispatch(loadingItem(true));
    if (item.has_combinations > 0 || item.has_customizable > 0) {
      data = {
        endpoint: "/product/combination/get",
        id_product: item.id_product
      };
      let form = toFormData(data, null, "");
      let self = this;
      axios({
        method: "post",
        url: api,
        data: form
      })
        .then(function(response) {
          item = _.assign({}, item, {
            coms: response.data.data.combinations,
            customization_fields: response.data.data.customization_fields
          });
          dispatch(openPopup({ data: item }));
          self.setState({
            item
          });
          dispatch(loadingItem(false));
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      const addToCartParams = {
        id_product: item.id_product,
        id_product_attribute: 0,
        id_shop: idShop,
        id_cart: idCart,
        text_fields: [],
        image_fields: [],
        dispatch
      };
      let allow_ordering_out_of_stock = !(
        Number(item.quantity) <= 0 && !item.allow_ordering_out_of_stock
      );
      if (allow_ordering_out_of_stock) {
        addToCartWithoutCustomization(addToCartParams);
      } else {
        ToastAndroid.showWithGravity(
          lang.product_is_out_of_stock,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        dispatch(loadingItem(false));
      }
    }
  };

  render() {
    const { type } = this.props;
    const { item } = this.state;
    return (
      <View>
        {_.isEqual(type, configuration.search) ? (
          <TouchableOpacity
            style={styles.itemSearchResultContainer}
            onPress={() => {
              this.onItemClick(item);
            }}
          >
            <Text>
              {sprintf(
                configuration.search_item_text_format,
                limitText(item.name),
                item.id_product,
                item.reference,
                item.stock
              )}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => this.onItemClick(item)}
            style={styles.productWrapper}
          >
            <Image style={styles.image} source={{ uri: item.image_url }} />
            <Text style={styles.infoTxt}>{limitText(item.name)}</Text>
            <View style={styles.textPriceBlockList}>
              <Text style={styles.textPriceWithReduction}>
                {displayPrice(item.price_with_reduction)}
              </Text>
              {!_.isEqual(
                item.price_without_reduction,
                item.price_with_reduction
              ) && (
                <Text style={styles.textPriceWithoutReduction}>
                  {displayPrice(item.price_without_reduction)}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
